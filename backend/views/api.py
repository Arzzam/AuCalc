from django.http import JsonResponse


def degrees(request):
    data = {"data": [
        "Bachelor of Engineering",
        "Bachelor of Technology"
    ]}
    return JsonResponse(data)
