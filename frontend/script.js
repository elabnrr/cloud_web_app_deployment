const fetchBtn = document.getElementById("fetch-btn");
const resultBox = document.getElementById("result-box");
const responseOutput = document.getElementById("response-output");

fetchBtn.addEventListener("click", () => {
    responseOutput.innerHTML = "<span style='color: #888;'>Connecting to Azure Function...</span>";
    resultBox.classList.remove("hidden");

    fetch("https://buildautomation3-eeadfhdbbrdseef4.polandcentral-01.azurewebsites.net/api/HttpTrigger1")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const prettyJson = JSON.stringify(data, null, 2);
            responseOutput.innerHTML = syntaxHighlight(prettyJson);
        })
        .catch(error => {
            console.error("Fetch hatası:", error);
            responseOutput.innerHTML = `<span style='color: #f43f5e;'>Hata oluştu: ${error.message}</span>`;
        });
});

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
        let cls = 'json-value';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
                match = match.replace(':', '');
                return `<span class="${cls}">${match}</span>:`;
            } else {
                cls = 'json-string';
            }
        }
        return `<span class="${cls}">${match}</span>`;
    });
}