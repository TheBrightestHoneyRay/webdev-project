# Generated by Django 4.2 on 2023-04-16 10:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_mycomicslist_user'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='MyComicsList',
            new_name='MyComics',
        ),
    ]
