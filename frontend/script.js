fetch("https://buildautomation3-eeadfhdbbrdseef4.polandcentral-01.azurewebsites.net/api/HttpTrigger1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error(error);
  });