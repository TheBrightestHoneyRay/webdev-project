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


class Discussion(models.Model):
    creator = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True
    )

    title = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)


class Comments(models.Model):
    user = models.ForeignKey(
        User,
        related_name='comments',
        on_delete=models.SET_NULL,
        null=True
    )

    comics = models.ForeignKey(
        Comics,
        related_name='comments',
        on_delete=models.CASCADE,
        null=True
    )

    discussion = models.ForeignKey(
        Discussion,
        related_name='comments',
        on_delete=models.CASCADE,
        null=True
    )

    body = models.TextField()
    post_time = models.DateTimeField(
        auto_now_add=True
    )
