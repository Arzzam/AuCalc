from django.contrib import admin
from .models import *

class RegulationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Regulation._meta.fields]

class DegreeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Degree._meta.fields]

class DepartmentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Department._meta.fields]

class CourseAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Course._meta.fields]

class SemesterSubjectAdmin(admin.ModelAdmin):
    list_display = [field.name for field in SemesterSubject._meta.fields]

admin.site.register(Regulation, RegulationAdmin)
admin.site.register(Degree, DegreeAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(SemesterSubject, SemesterSubjectAdmin)
