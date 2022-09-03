from django.db import models


# Create your models here.
class Degree(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Regulation(models.Model):
    year = models.IntegerField(unique=True)

    def __str__(self):
        return str(self.year)


class Department(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    code = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f"{self.code} - {self.title}"

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['code', 'title'],
                                    name='unique_course_title')
        ]


class SemesterSubject(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    credits = models.IntegerField()
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    semester = models.IntegerField()
    regulation_id = models.ForeignKey(Regulation, on_delete=models.CASCADE)
    degree_id = models.ForeignKey(Degree, on_delete=models.CASCADE)

    def __str__(self):
        return " - ".join(
            (str(obj) for obj in (
                self.course_id.code,
                self.semester,
                self.department_id,
                self.regulation_id
            ))
        )

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=[
                'course_id',
                'credits',
                'department_id',
                'semester',
                'regulation_id',
                'degree_id'
            ], name='unique_semester_subject_fields')
        ]
