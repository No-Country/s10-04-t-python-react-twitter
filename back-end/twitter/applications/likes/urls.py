# Django
from django.urls import path, re_path, include
# Views
from . import views


app_name ='likes_app'

urlpatterns=[
    path('api/like/<int:pk>/', views.like),
    path('api/likelist/<int:pk>/', views.list_like),
    path('api/likesuser/<str:username>/', views.get_user_likes),
]

   