from django.http import JsonResponse


def degrees(request):
    data = {"degrees": [
        "Bachelor of Engineering",
        "Bachelor of Technology"
    ]}
    return JsonResponse(data)
