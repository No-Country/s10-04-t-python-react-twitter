# Django
from django.urls import path, re_path, include
# Views
from . import views

app_name ='users_app'

urlpatterns = [
   # Users
   path(
    'api/register/',
    views.UserRegistrationView.as_view(),
    name='register'
   ),
   path(
    "api/login/",
    views.UserLogin.as_view(),
    name="user-login"
   ),   
   path(
    "api/logout/",
    views.UserLogoutView.as_view(),
    name="user-logout"
   ),
   path(
    "api/detail/<pk>/",
    views.UserDetailAPIView.as_view(),
    name="user-detail"
   ),
   path(
    "api/update/<pk>/",
    views.UserUpdateAPIView.as_view(),
    name="user-update"
   ),
   path(
    "api/delete/<pk>/",
    views.PersonDeletePIView.as_view(),
    name="user-delete"
   ),
   # Follower and Following
   path(
      'api/<pk>/follow-toggle/', 
      views.FollowToggleView.as_view(), 
      name='user-follow-toggle'
   ),
   path(
      'api/detail/followers/<pk>/', 
      views.UserDetailFollowers.as_view(), 
      name='user-detail-followers'
   ),
]


   