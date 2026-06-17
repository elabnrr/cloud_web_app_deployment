document.getElementById('fetch-btn').addEventListener('click', async () => {
    const outputBox = document.getElementById('result-box');
    const outputText = document.getElementById('response-output');
    
    const BACKEND_URL = "https://buildautomation3-eeadfhdbbrdseef4.polandcentral-01.azurewebsites.net/api/HttpTrigger1?code=Y2FhZDI5YjktZWIyMi00YjQ0LWI4ZjUtM2E3YzQxN2I0ZDY3fHJlYWQtd3JpdGU="; 

    outputText.textContent = "Loading data from Azure...";
    outputBox.classList.remove('hidden');

    try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) throw new Error("Network response was not ok.");
        
        const data = await response.json();
        
        // Render the response nicely on the screen
        outputText.innerHTML = `
            <strong>Status:</strong> ${data.status}<br>
            <strong>Message:</strong> ${data.message}<br>
            <strong>Architecture:</strong> ${data.architecture}<br>
            <strong>Automation:</strong> ${data.automation}
        `;
    } catch (error) {
        outputText.textContent = "Error: " + error.message;
    }
});