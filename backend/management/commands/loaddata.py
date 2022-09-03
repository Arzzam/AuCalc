import pandas as pd
from django.core.management.base import BaseCommand

from backend.models import *


class Command(BaseCommand):
    help = """
    Load the data from a csv files to database.
    The input files must follow the format.
    File Type: .csv
    Must have columns:
     - COURSE CODE : str not null
     - COURSE NAME : str not null
     - CREDIT : int not null
     - DEPARTMENT : str not null
     - SEMESTER : int not null
     - REGULATION : int not null
     - DEGREE : str not null
    """

    def add_arguments(self, parser):
        parser.add_argument('files', nargs='+', type=str)

    def handle(self, *args, **options):

        self.stdout.write(
            self.style.WARNING(
                "Warning: Do not break the process."
            )
        )
        self.stdout.write(
            self.style.MIGRATE_HEADING(
                "Loading data... (This may take while depend on data size.)"
            )
        )


        required_cols = [
            'COURSE CODE',
            'COURSE TITLE',
            'CREDITS',
            'DEPARTMENT',
            'SEMESTER',
            'REGULATION',
            'DEGREE'
        ]

        processed_df_rows = 0
        total_df_rows = 0

        for file in options['files']:
            df = pd.read_csv(file)[required_cols]
            total_df_rows += len(df.index)

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

                _, is_created = SemesterSubject.objects.get_or_create(
                    course_id=course_obj,
                    credits=credit,
                    department_id=department_obj,
                    semester=semester,
                    regulation_id=regulation_obj,
                    degree_id=degree_obj
                )

                processed_df_rows += is_created

        self.stdout.write(
            self.style.SUCCESS(
                f"Success: {processed_df_rows}/{total_df_rows}"
                f" rows are loaded to the database."
            )
        )
