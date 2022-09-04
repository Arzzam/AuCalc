from django.http.response import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from backend.serializer import *


def index(request):
    return HttpResponse("<h1>Backend Running...</h1>")


def regulation_list(request):
    if request.method == 'GET':
        regulations = Regulation.objects.all()
        serializer = RegulationSerializer(regulations, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def degree_list(request):
    if request.method == "POST":
        data = JSONParser().parse(request)

        degrees = Degree.objects.filter(regulation=data['regulation_id'])
        if not degrees:
            return HttpResponse(status=404)

        serializer = DegreeSerializer(degrees, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def department_list(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        departments = Department.objects.filter(degree=data['degree_id'])
        if not departments:
            return HttpResponse(status=404)

        serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def semester_list(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        semesters = SemesterSubject.objects.filter(
            department=data['department_id']
        ).values('semester').distinct().count()
        if not semesters:
            return HttpResponse(status=404)

        data = [{'id': i, 'data': i} for i in range(1, semesters + 1)]
        return JsonResponse(data, safe=False)


@csrf_exempt
def semester_subject_list(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        semester_subs = SemesterSubject.objects.filter(
            department=data['department_id'],
            semester=data['semester_id']
        )
        if not semester_subs:
            return HttpResponse(status=404)

        serializer = SemesterSubjectSerializer(semester_subs, many=True)
        return JsonResponse(serializer.data, safe=False)
