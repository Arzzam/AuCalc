from django.db import models


class Regulation(models.Model):
    year = models.IntegerField(unique=True)


class Degree(models.Model):
    name = models.CharField(max_length=50)
    regulation = models.ForeignKey(Regulation, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=[
                    'name',
                    'regulation'
                ],
                name='unique_name_regulation'
            )
        ]


class Department(models.Model):
    name = models.CharField(max_length=100)
    degree = models.ForeignKey(Degree, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=[
                    'name',
                    'degree'
                ],
                name='unique_name_degree'
            )
        ]


class Course(models.Model):
    code = models.CharField(max_length=20, unique=True)
    title = models.CharField(max_length=100)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=[
                    'code',
                    'title'
                ],
                name='unique_code_title'
            )
        ]


class SemesterSubject(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    credits = models.IntegerField()
    semester = models.IntegerField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=[
                    'course',
                    'credits',
                    'semester',
                    'department'
                ],
                name='unique_subject_credit_department'
            )
        ]
