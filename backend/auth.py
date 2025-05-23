import os
from flask import Flask, redirect, url_for, session, request, render_template
from authlib.integrations.flask_client import OAuth
from supabase import create_client, Client
from dotenv import load_dotenv

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY') or 'defaultsecret'

load_dotenv()

# Supabase config
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Google OAuth setup
oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

@app.route('/')
def index():
    user_email = session.get('user_email')
    user_name = session.get('user_name')
    return render_template('dashboard.html', user_email=user_email, user_name=user_name)

@app.route('/login')
def login():
    redirect_uri = url_for('callback', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/callback')
def callback():
    token = google.authorize_access_token()
    resp = google.get(google.server_metadata['userinfo_endpoint'])
    user_info = resp.json()

    email = user_info.get('email')
    name = user_info.get('name')

    # Store in Supabase
    existing = supabase.table("users").select("*").eq("email", email).execute()
    if len(existing.data) == 0:
        supabase.table("users").insert({"email": email, "name": name}).execute()

    session['user_email'] = email
    session['user_name'] = name
    return redirect('/')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/test-db')
def test_db():
    try:
        supabase.table("users").insert({"test": "value"}).execute()
        return "✅ Connected to Supabase and inserted test data!"
    except Exception as e:
        return f"❌ Supabase error: {e}"

if __name__ == "__main__":
    app.run(debug=True)
