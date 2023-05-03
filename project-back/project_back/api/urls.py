from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import token_obtain_pair
from api import views

urlpatterns = [
    path('comics/', views.comics_all),
    path('comics/<int:comics_id>/', views.comics_detail),
    path('comics/<int:comics_id>/comments', views.comics_comments),
    path('comics/latest/', views.latest_release),
    path('types/', views.types_all),
    path('types/<int:type_id>/', views.type_detail),
    path('genre/', views.genre_all),
    path('<int:user_id>/mylist/', views.user_list_all),
    path('<int:user_id>/mylist/<int:comics_id>/', views.my_comics_detail),
    path('discussions/', views.discussions_all),
    path('recent_discussions/', views.recent_discussions),
    path('discussions/<int:dis_id>/', views.discussion_details),
    path('discussions/<int:dis_id>/comments/', views.discussion_commentary),
    path('discussions/<int:dis_id>/newcomment/', views.discussion_newcommentary),
    path('comments/', views.comments_all),
    path('top_ten/', views.top_ten),
    path('top_ten/<int:type_id>/', views.type_ten),
    path('top_three/', views.top_three),
    path('top_three/<int:type_id>/', views.type_three),
    path('template/', views.testing),
    path('ongoing/top_three', views.top_three_ongoing),
    path('signup/', views.user),
    path('users/', views.users),
    path('news/', views.NewsList.as_view()),
    path('news/<int:id>/', views.NewsDetails.as_view()),
    path('news/<int:news_id>/gallery', views.news_gallery),
    path('news/<int:news_id>/gallery/<int:gallery_id>/', views.news_gallery_detail),
    path('gallery/', views.GalleryList.as_view()),
]