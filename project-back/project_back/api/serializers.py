
from rest_framework import serializers
from api.models import News, Type, Comics, User, MyComics, Gallery, Genre, Comments, Discussion


class ComicsSerializer(serializers.ModelSerializer):
    type_name = serializers.CharField(source='type.name')
    genre = serializers.StringRelatedField(many=True)

    class Meta:
        model = Comics
        fields = (
            'id',
            'name',
            'pic',
            'author',
            'genre',
            'description',
            'duration',
            'status',
            'rating',
            'published',
            'type_name',
            'comments'
        )


class GenreSerializer(serializers.ModelSerializer):
    comics = ComicsSerializer(many=True)

    class Meta:
        model = Genre
        fields = ('id', 'name', 'comics')


class TypeSerializer(serializers.ModelSerializer):
    comics = ComicsSerializer(many=True)

    class Meta:
        model = Type
        fields = ('id', 'name', 'comics')


class MyComicsSerializer(serializers.HyperlinkedModelSerializer):
    comics = ComicsSerializer(required=True)

    class Meta:
        model = MyComics
        fields = (
            'comics',
            'progress'
        )


class UserSerializer(serializers.ModelSerializer):
    my_list = MyComicsSerializer(many=True)

    class Meta:
        model = User
        fields = [
            'id',
            'user_name',
            'email',
            'my_list',
            'password',
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comments
        fields = (
            'id',
            'user',
            'body',
            'post_time'
        )


class DiscussionSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Discussion
        fields = (
            'id',
            'title',
            'user',
            'creator',
            'created_time',
            'comments'
        )


class GallerySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    pic = serializers.CharField()

    def create(self, validated_data):
        gallery = Gallery.objects.create(**validated_data)
        return gallery

    def update(self, instance, validated_data):
        instance.pic = validated_data.get('pic', instance.pic)
        instance.save()
        return instance


class NewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    body = serializers.CharField()
    post_date = serializers.DateField()
    gallery = GallerySerializer(many=True)

    def create(self, validated_data):
        news = News.objects.create(**validated_data)
        return news

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.body = validated_data.get('body', instance.body)
        instance.gallery = validated_data.get('gallery', instance.gallery)
        return instance

