import json

from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse, HttpResponseRedirect
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from api.models import Comics, User, Type, MyComics, News, Gallery, Genre, Comments, Discussion
from api.serializers import ComicsSerializer, TypeSerializer, GenreSerializer, MyComicsSerializer, UserSerializer
from api.serializers import CommentSerializer, DiscussionSerializer, NewsSerializer, GallerySerializer


def comics_all(request):
    comics = Comics.objects.all().order_by('id')

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def comics_detail(request, comics_id):
    comics = Comics.objects.all()

    try:
        comics_det = comics.get(id=comics_id)
    except Comics.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics_serializer = ComicsSerializer(comics_det)
    return JsonResponse(comics_serializer.data, safe=False)


def types_all(request):
    types = Type.objects.all().order_by('id')

    types_serializer = TypeSerializer(types, many=True)
    return JsonResponse(types_serializer.data, safe=False)


def type_detail(request, type_id):
    types = Type.objects.all()

    try:
        type_det = types.get(id=type_id)
    except Type.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    type_serializer = TypeSerializer(type_det)
    return JsonResponse(type_serializer.data, safe=False)


def genre_all(request):
    genres = Genre.objects.all()

    genres_serializer = GenreSerializer(genres, many=True)
    return JsonResponse(genres_serializer.data, safe=False)


def testing(request):
    mycomics = Comics.objects.all().values()
    template = loader.get_template('try.html')
    context = {
        'mycomics': mycomics
    }
    return HttpResponse(template.render(context, request))


def user_list_all(request, user_id):
    try:
       i_user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    my_comics = MyComics.objects.all()
    my_comics_list = []
    for com in my_comics:
        if com.user_id == user_id:
            my_comics_list.append(com)
    my_comics_list_serializer = MyComicsSerializer(my_comics_list, many=True)
    return JsonResponse(my_comics_list_serializer.data, safe=False)


@csrf_exempt
def user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username', '')
        email = data.get('email', '')
        password = data.get('password', '')
        user = User.objects.create(user_name=username, email=email, password=password)
        user_serializer = UserSerializer(user)
        return JsonResponse(user_serializer.data, safe=False)


def users(request):
    useres = User.objects.all()
    users_serializer = UserSerializer(useres, many=True)
    return JsonResponse(users_serializer.data, safe=False)


def my_comics_detail(request, user_id, comics_id):

    try:
        i_user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    my_comics = MyComics.objects.all()
    my_comics_list = []
    for com in my_comics:
        if com.user_id == user_id:
            my_comics_list.append(com)
    try:
        for c in my_comics_list:
            comics = c.__class__.objects.get(comics_id=comics_id)
    except MyComics.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics_serializer = MyComicsSerializer(comics)
    return JsonResponse(comics_serializer.data, safe=False)


def latest_release(request):
    comics = Comics.objects.order_by('-published')[:5]
    serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(serializer.data, safe=False)


def discussions_all(request):
    discussions = Discussion.objects.all()

    discussions_serializer = DiscussionSerializer(discussions, many=True)
    return JsonResponse(discussions_serializer.data, safe=False)


@csrf_exempt
def discussion_newcommentary(request, dis_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        coment_body = data.get('body', '')
        dis_id = data.get('discussion', '')
        discussion = Discussion.objects.get(id=dis_id)

        coment = Comments.objects.create(discussion=discussion, body=coment_body)
        coment_serializer = CommentSerializer(coment)
        return JsonResponse(coment_serializer.data, safe=False)


def recent_discussions(request):
    dis = Discussion.objects.order_by('-created_time')[:5]

    dis_serializer = DiscussionSerializer(dis, many=True)
    return JsonResponse(dis_serializer.data, safe=False)


def discussion_details(request, dis_id):
    try:
        dis = Discussion.objects.get(id=dis_id)
    except Discussion.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    dis_serializer = DiscussionSerializer(dis)
    return JsonResponse(dis_serializer.data, safe=False)


@csrf_exempt
def comments_all(request):
    if request.method == 'GET':
        comments = Comments.objects.all()

        comments_serializer = CommentSerializer(comments, many=True)
        return JsonResponse(comments_serializer.data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        comment_body = data.get('body', '')
        comics_id = data.get('comics', '')
        com = Comics.objects.get(id=comics_id)
        comment = Comments.objects.create(comics=com, body=comment_body)


def discussion_commentary(request, dis_id):
    try:
        dis = Discussion.objects.get(id=dis_id)
    except Discussion.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comments = Comments.objects.filter(discussion=dis)
    comments_serializer = CommentSerializer(comments, many=True)
    return JsonResponse(comments_serializer.data, safe=False)


def comics_comments(request, comics_id):
    try:
        com = Comics.objects.get(id=comics_id)
    except Comics.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comments = Comments.objects.filter(comics=com)
    comments_serializer = CommentSerializer(comments, many=True)
    return JsonResponse(comments_serializer.data, safe=False)


def top_ten(request):
    comics = Comics.objects.all().order_by('rating')[:10]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def type_ten(request, type_id):
    try:
        tyep = Type.objects.get(id=type_id)
    except Type.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics = tyep.comics.order_by('-rating')[:10]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def top_three(request):
    comics = Comics.objects.all().order_by('-rating')[:10]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def type_three(request, type_id):
    try:
        tyep = Type.objects.get(id=type_id)
    except Type.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics = tyep.comics.order_by('-rating')[:3]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def top_three_ongoing(request):
    coms = Comics.objects.filter(status='Ongoing').order_by('-rating')[:3]

    comics_serializer = ComicsSerializer(coms, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


class NewsList(APIView):
    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class NewsDetails(APIView):

    def get_object(self, id):
        try:
            return News.objects.get(id=id)
        except News.DoesNotExist as e:
            return JsonResponse({'error': str(e)})

    def get(self, request, id):
        news = self.get_object(id)
        serializer = NewsSerializer(news)
        return Response(serializer.data)


class GalleryList(APIView):

    def get(self, request):
        gallery = Gallery.objects.all()
        serializer = GallerySerializer(gallery, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GallerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


def news_gallery(request, news_id):

    try:
        news = News.objects.get(id=news_id)
    except News.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    gallery = Gallery.objects.filter(news=news)
    serializer = GallerySerializer(gallery, many=True)
    return JsonResponse(serializer.data, safe=False)


def news_gallery_detail(request, news_id, gallery_id):
    try:
        news = News.objects.get(id=news_id)
    except News.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    gallery = Gallery.objects.filter(news=news)

    try:
        detail = gallery.get(id=gallery_id)
    except News.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    serializer = GallerySerializer(detail)
    return JsonResponse(serializer.data, safe=False)

