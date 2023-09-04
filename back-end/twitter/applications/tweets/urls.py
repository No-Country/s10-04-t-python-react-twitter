from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name ='tweets_app'

# router = routers.DefaultRouter()
# router.register(r'tweets', TweetViewSet)
# router.register(r'citas', CitaViewSet)

urlpatterns = [
    path('api/comentario/',views.ComentarioCreateView.as_view(), name='comentario-create'),
    path('api/trending/',views.TrendingTopicsView.as_view(), name='trending-topics'),
    path('api/tweets/',views.TweetViewSet.as_view(), name='tweets'),
    path('api/citas/',views.CitaViewSet.as_view(), name='citas'),
    path('api/detail/<pk>/',views.TweetsDetailAPIView.as_view(), name='detail'),
    path('api/retweets/',views.RetweetView.as_view(), name='retweets'),
]
# urlpatterns += [
#     path('', include(router.urls)),
# ]

#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)






   