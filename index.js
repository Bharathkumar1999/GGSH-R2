// index.js
function callCombineAPI(str1, str2) {
    // Displaying the current operation
    document.getElementById('result').innerHTML = `Current Operation: Combine Strings (${str1}, ${str2})`;
  
    fetch(`http://localhost:3000/api/combine?str1=${str1}&str2=${str2}`)
      .then(response => response.text())
      .then(result => displayResult(result))
      .catch(error => console.error('Error calling Combine API:', error));
  }
  
  function callAddAPI(num1, num2, num3) {
    // Displaying the current operation
    document.getElementById('result').innerHTML = `Current Operation: Add Numbers (${num1}, ${num2}, ${num3})`;
  
    const numbers = { num1, num2, num3 };
  
    fetch('http://localhost:3000/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(numbers)
    })
      .then(response => response.json())
      .then(result => displayResult(result.result))
      .catch(error => console.error('Error calling Add API:', error));
  }
  
  function displayResult(result) {
    document.getElementById('result').innerHTML += `<br>Result: ${result}`;
  }
  

