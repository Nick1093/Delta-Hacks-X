import requests
import json

# Define the URL
url = "http://localhost:8000/generate_response/"

# Add the 'new_prompt' query parameter to the URL
url += "?new_prompt=How are you?"

# Define the headers
headers = {
    'Content-Type': 'application/json'
}

# Define the body
body = [{'role': 'user', 'message': 'Hello'}]

# Send the POST request
response = requests.post(url, headers=headers, data=json.dumps(body))

# Print the response
print(response.json())