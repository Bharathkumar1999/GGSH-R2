# Node.js Assessment Documentation

This repository contains a Node.js assessment application that demonstrates combining strings and adding numbers through APIs.

## Files Included:

1. **index.html**
   - Provides a user-friendly interface for combining strings and adding numbers.
   - Styled for a clean appearance.

2. **server.js**
   - Node.js server using Express for two APIs:
     - API 1 (GET): Combines two strings provided as query parameters.
     - API 2 (POST): Adds three numbers provided in the request body.

3. **index.js**
   - Client-side JavaScript file containing functions to interact with the server APIs.
     - `callCombineAPI(str1, str2)`: Calls API 1 to combine two strings.
     - `callAddAPI(num1, num2, num3)`: Calls API 2 to add three numbers.
     - `displayResult(result)`: Displays the result on the HTML page.

4. **package.json**
   - Contains project information and dependencies (Express and CORS).

## How to Run:

1. **Install Dependencies:**
   - Open a terminal in the project directory.
   - Run the following command to install dependencies:
     npm install


2. **Run the Server:**
   - Execute the following command to start the Node.js server:
     npm start
     
   - The server will run on http://localhost:3000.

3. **Access the Application:**
   - Open a web browser and navigate to http://localhost:3000.

4. **Usage:**
   - Enter values in the input fields.
   - Click "Combine Strings" or "Add Numbers" to see the current operation and the result.

## Example API Requests:

### API 1 - GET method:

Open a web browser and navigate to the following URL:

http://localhost:3000/api/combine?str1=Hello&str2=World

### API 2 - POST method:

Open a web browser and navigate to the following URL:

http://localhost:3000/api/add

Include the following JSON data in the request body:

{
  "num1": 10,
  "num2": 20,
  "num3": 30
}

You will receive a JSON response with the added result:

{
  "result": 60
}

Note: Ensure that the Node.js server is running (npm start) before making these API requests.