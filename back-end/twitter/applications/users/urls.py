# Django
from django.urls import path, re_path, include
# Views
from . import views

app_name ='users_app'

urlpatterns = [
   # Users
   path(
    'users/register/',
    views.UserRegistrationView.as_view(),
    name='register'
   ),
   path(
    "users/login/",
    views.UserLogin.as_view(),
    name="user-login"
   ),   
   path(
    "users/logout/",
    views.UserLogoutView.as_view(),
    name="user-logout"
   ),
   path(
    "users/detail/<pk>/",
    views.UserDetailAPIView.as_view(),
    name="user-detail"
   ),
   path(
    "users/update/<pk>/",
    views.UserUpdateAPIView.as_view(),
    name="user-update"
   ),
   path(
    "users/delete/<pk>/",
    views.PersonDeletePIView.as_view(),
    name="user-delete"
   ),
   # Follower and Following
   path(
      'users/<pk>/follow-toggle/', 
      views.FollowToggleView.as_view(), 
      name='user-follow-toggle'
   ),
   path(
      'users/detail/followers/<pk>/', 
      views.UserDetailFollowers.as_view(), 
      name='user-detail-followers'
   ),
]


   