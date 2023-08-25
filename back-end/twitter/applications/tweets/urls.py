from django.urls import path, include
from rest_framework import routers
from .views import TweetViewSet, CitaViewSet, ComentarioCreateView, TrendingTopicsView
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'tweets', TweetViewSet)
router.register(r'citas', CitaViewSet)

urlpatterns = [
    path('comentario/', ComentarioCreateView.as_view(), name='comentario-create'),
    path('trending/', TrendingTopicsView.as_view(), name='trending-topics'),
]
urlpatterns += [
    path('', include(router.urls)),
]

#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



#no se de donde salio esto, pero aja lo dejo como esta :v
app_name ='tweets_app'


   