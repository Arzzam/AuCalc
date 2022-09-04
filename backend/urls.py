from django.urls import path

from .views import *

urlpatterns = [
    path('regulations/', regulation_list),
    path('degrees/', degree_list),
    path('departments/', department_list),
    path('semesters/', semester_list),
    path('subjects/', semester_subject_list),
]
