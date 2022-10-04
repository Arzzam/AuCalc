from rest_framework import serializers

from .models import *


class RegulationSerializer(serializers.ModelSerializer):
    data = serializers.IntegerField(source='year')

    class Meta:
        model = Regulation
        fields = ['id', 'data']


class DegreeSerializer(serializers.ModelSerializer):
    data = serializers.CharField(source='name')

    class Meta:
        model = Degree
        fields = ['id', 'data']


class DepartmentSerializer(serializers.ModelSerializer):
    data = serializers.CharField(source='name')

    class Meta:
        model = Department
        fields = ['id', 'data']


class SemesterSubjectSerializer(serializers.ModelSerializer):
    code = serializers.CharField(source='course.code')
    title = serializers.CharField(source='course.title')

    class Meta:
        model = SemesterSubject
        fields = ['id', 'code', 'title', 'credits']


class SemesterCreditSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='semester')

    class Meta:
        model = SemesterSubject
        fields = ['id', 'semester', 'credits']
