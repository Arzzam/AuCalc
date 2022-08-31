from django.http import HttpResponse, JsonResponse


def index(request):
    return HttpResponse("<h1>Backend Running...</h1>")


def degrees(request):
    data = {"degrees": [
        "Bachelor of Engineering",
        "Bachelor of Technology"
    ]}
    return JsonResponse(data)
