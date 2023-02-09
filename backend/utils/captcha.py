from django.conf import settings
import requests


def create_assessment(token: str, action: str):
    response = requests.post(
        f"https://recaptchaenterprise.googleapis.com/v1/projects/{settings.RECAPTCHA_PROJECT_ID}/assessments?key={settings.RECAPTCHA_API_KEY}",
        headers={
            "Content-Type": "application/json; charset=utf-8",
        },
        json={
            "event": {
                "token": token,
                "siteKey": settings.RECAPTCHA_SITE_KEY,
                "expectedAction": action
            }
        }
    )
    return response


def is_captcha_valid(token: str, action: str) -> bool:
    response = create_assessment(token, action).json()
    if response and response["tokenProperties"]["valid"] and \
            response["riskAnalysis"]["score"] > settings.RECAPTCHA_THRESHOLD_SCORE and \
            response["tokenProperties"]["action"] == action:
        return True
    return False
