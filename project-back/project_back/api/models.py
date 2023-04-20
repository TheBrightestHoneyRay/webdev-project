from django.db import models

class User(models.Model):
    user_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=75)
    password = models.CharField(max_length=75)


class Type(models.Model):
    name = models.CharField(max_length=50)


class Genre(models.Model):
    name = models.CharField(max_length=75)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return ' %d: %s' % (self.id, self.name)


class Comics(models.Model):
    name = models.CharField(max_length=255)
    pic = models.URLField(null=True)
    author = models.CharField(max_length=255, null=True)
    type = models.ForeignKey(Type, related_name='comics', on_delete=models.CASCADE, null=True)
    genre = models.ManyToManyField(Genre, related_name='comics')
    description = models.TextField(null=True)
    duration = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    rating = models.FloatField()
    published = models.DateField(null=True)


class MyComics(models.Model):
    comics = models.OneToOneField(
        Comics,
        on_delete=models.CASCADE,
        primary_key=True
    )

    user = models.ForeignKey(
        User,
        related_name='my_list',
        on_delete=models.CASCADE
    )

    progress = models.CharField(max_length=255, default='reading')

