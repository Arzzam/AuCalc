import pandas as pd
from django.core.management.base import BaseCommand

from backend.models import *


class Command(BaseCommand):
    help = """
    Load the data from a csv files to database.
    The input files must follow the format.
    File Type: .csv
    Must have columns:
     - COURSE CODE : str
     - COURSE NAME : str
     - CREDIT : int
     - DEPARTMENT : str
     - SEMESTER : int
     - REGULATION : int
     - DEGREE : str
    """

    def add_arguments(self, parser):
        parser.add_argument('files', nargs='+', type=str)

    def handle(self, *args, **options):

        required_cols = [
            'COURSE CODE',
            'COURSE TITLE',
            'CREDITS',
            'DEPARTMENT',
            'SEMESTER',
            'REGULATION',
            'DEGREE'
        ]

        objs = []
        total_df_rows = 0

        for file in options['files']:
            df = pd.read_csv(file)[required_cols]
            for (_index,
                 course_code,
                 course_title,
                 credit,
                 department,
                 semester,
                 regulation,
                 degree) in df.itertuples():
                course_obj, _ = Course.objects.get_or_create(
                    code=course_code,
                    title=course_title
                )

                department_obj, _ = Department.objects.get_or_create(
                    name=department
                )

                regulation_obj, _ = Regulation.objects.get_or_create(
                    year=regulation
                )

                degree_obj, _ = Degree.objects.get_or_create(
                    name=degree
                )

                objs.append(SemesterSubject(
                    course_id=course_obj,
                    credits=credit,
                    department_id=department_obj,
                    semester=semester,
                    regulation_id=regulation_obj,
                    degree_id=degree_obj
                ))
            total_df_rows += len(df.index)

        processed_df_rows = len(SemesterSubject.objects.bulk_create(objs))
        self.stdout.write(
            self.style.SUCCESS(
                f"SUCCESS: {processed_df_rows}/{total_df_rows}"
                f" are loaded to the database."
            )
        )
