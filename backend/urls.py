from django.urls import path
from .views import *

urlpatterns = [
   path('degrees/', api.degrees, name='degrees')
]