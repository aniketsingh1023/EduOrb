# main.py (fixed and working)
import os
from flask import Flask, redirect, url_for, session, request, jsonify
from flask_cors import CORS
from authlib.integrations.flask_client import OAuth
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY") or "defaultsecret"
CORS(app, supports_credentials=True)

# Supabase
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Google OAuth
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

@app.route("/login")
def login():
    redirect_uri = url_for("callback", _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route("/callback")
def callback():
    token = google.authorize_access_token()
    user_info = google.parse_id_token(token)

    email = user_info.get("email")
    name = user_info.get("name")

    # Store in Supabase if not already
    existing = supabase.table("users").select("*").eq("email", email).execute()
    if len(existing.data) == 0:
        supabase.table("users").insert({"email": email, "name": name}).execute()

    session['user_email'] = email
    session['user_name'] = name
    return redirect("http://localhost:3000/dashboard")  # redirect to frontend dashboard

@app.route("/user")
def get_user():
    if 'user_email' in session:
        return jsonify({
            "email": session.get("user_email"),
            "name": session.get("user_name")
        })
    return jsonify({"error": "Unauthorized"}), 401

@app.route("/logout")
def logout():
    session.clear()
    return redirect("http://localhost:3000")

if __name__ == "__main__":
    app.run(port=5000, debug=True)