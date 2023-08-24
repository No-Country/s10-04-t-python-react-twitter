# Django
from django.urls import path, re_path, include
# Views
from . import views


app_name ='likes_app'

urlpatterns=[
    path('like/<int:pk>/', views.like),
    path('likelist/<int:pk>/', views.list_like),
    path('likesuser/<str:username>/', views.get_user_likes),
]

   