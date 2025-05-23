import google.generativeai as genai

genai.configure(api_key="AIzaSyAp9AGnnhOl3FR8Y922onCEcV_FCFnlLwg")
model = genai.GenerativeModel("gemini-1.5-flash")

response = model.generate_content("Give me 5 ML interview questions.")
print(response.text)
