const fetchBtn = document.getElementById("fetch-btn");
const resultBox = document.getElementById("result-box");
const responseOutput = document.getElementById("response-output");

fetchBtn.addEventListener("click", () => {

    responseOutput.innerText = "Connecting to Azure Function...";
    resultBox.classList.remove("hidden");


    fetch("https://buildautomation3-eeadfhdbbrdseef4.polandcentral-01.azurewebsites.net/api/HttpTrigger1")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            
            return response.text();
        })
        .then(data => {
            
            responseOutput.innerText = data;
        })
        .catch(error => {
           
            console.error("Fetch hatası:", error);
            responseOutput.innerText = `Hata oluştu: ${error.message}\n(Lütfen Azure CORS ayarlarını kontrol edin.)`;
        });
});