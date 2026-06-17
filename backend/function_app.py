import azure.functions as func
import json
import logging

# Azure Function App Definition (Python V2)
app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="HttpTrigger1", methods=["GET", "POST"])
def HttpTrigger1(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Cloud Web App Backend triggered successfully.')

    # Response payload for the frontend
    response_data = {
        "status": "success",
        "message": "Azure Function (Python V2) is running perfectly!",
        "project": "Cloud Web Application Deployment",
        "architecture": "Distributed (Frontend & Backend Split)",
        "automation": "GitHub Actions CI/CD"
    }

    return func.HttpResponse(
        json.dumps(response_data),
        mimetype="application/json",
        status_code=200
    )