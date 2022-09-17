from argparse import RawTextHelpFormatter
import pandas as pd
from django.core.management.base import BaseCommand

from backend.models import *


class Command(BaseCommand):
    help = """
    Loads the data from a csv files to database.
    The input files must follow the format.
    File Type: .csv
    Must have columns:
     - COURSE CODE : str not null
     - COURSE NAME : str not null
     - CREDITS : int not null
     - DEPARTMENT : str not null
     - SEMESTER : int not null
     - REGULATION : int not null
     - DEGREE : str not null
    """

    def create_parser(self, prog_name: str, subcommand: str, **kwargs):
        parser = super().create_parser(prog_name, subcommand, **kwargs)
        parser.formatter_class = RawTextHelpFormatter
        return parser

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
                "Loading data... (Depending on the data size this may take a while.)"
            )
        )

        required_cols = [
            'COURSE CODE',
            'COURSE TITLE',
            'CREDITS',
            'SEMESTER',
            'DEPARTMENT',
            'DEGREE',
            'REGULATION'
        ]

        processed_df_rows = 0
        total_df_rows = 0

        for file in options['files']:
            df = pd.read_csv(file)[required_cols]
            total_df_rows += len(df.index)

            for (_index,
                 course_code,
                 course_title,
                 credits,
                 semester,
                 department,
                 degree,
                 regulation) in df.itertuples():
                regul_obj, _ = Regulation.objects.get_or_create(
                    year=regulation
                )

                degree_obj, _ = Degree.objects.get_or_create(
                    name=degree,
                    regulation=regul_obj
                )

                depart_obj, _ = Department.objects.get_or_create(
                    name=department,
                    degree=degree_obj
                )

                course_obj, _ = Course.objects.get_or_create(
                    code=course_code,
                    title=course_title
                )

                _, is_created = SemesterSubject.objects.get_or_create(
                    course=course_obj,
                    credits=credits,
                    semester=semester,
                    department=depart_obj
                )

                processed_df_rows += is_created

        self.stdout.write(
            self.style.SUCCESS(
                f"Success: {processed_df_rows}/{total_df_rows}"
                f" rows are loaded to the database."
            )
        )
