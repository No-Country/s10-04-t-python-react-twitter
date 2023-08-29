from ..users.models import User
from ..tweets.models import Tweet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import TweetSerializer, NotiSerializer
from .models import Notificacion

# Create your views here.

#Generar like
@api_view(['POST'])
def like(request, pk):
    tweet = Tweet.objects.get(pk=pk)
    if request.user in tweet.liked.all():
        tweet.liked.remove(request.user)
        return Response({'status': 'ok'})
    else:
        tweet.liked.add(request.user)
        if request.user != tweet.usuario:
            Notificacion.objects.get_or_create(tipo='Le dio like a tu Tweet', tweet=tweet, para_usuario=tweet.usuario, de_usuario=request.user)
        return Response({'status': 'ok'})

#Likes de un Tweet 
@api_view(['GET'])
def list_like(_request, pk):
    tweets = Tweet.objects.filter(pk=pk)
    serializer = TweetSerializer(tweets, many=True)
    return Response(serializer.data)

#Likes que dio el usuario
@api_view(['GET'])
def get_user_likes(_request, email):
    user = User.objects.get(email=email)
    tweets = Tweet.objects.filter(liked=user)
    serializer = TweetSerializer(tweets, many=True)
    return Response(serializer.data)


### Notificaciones ############################################
@api_view(['GET'])
def noti(request):
    user = request.user
    notis = Notificacion.objects.filter(para_usuario=user, is_read=True)
    serializer = NotiSerializer(notis, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def noti_no_read(request):
    user = request.user
    notis = Notificacion.objects.filter(para_usuario=user, is_read=False)
    serializer = NotiSerializer(notis, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def noti_read_one(request, pk):
    user = request.user
    noti = Notificacion.objects.get(para_usuario=user, id=pk)
    if noti.is_read == True: 
        return Response({ 'message': 'Leído'})
    else:
        noti.is_read = True
        noti.save()
        return Response({ 'message': 'leído'})

@api_view(['PUT'])
def noti_read_all(request):
    user = request.user
    notis = Notificacion.objects.filter(para_usuario=user, is_read=False)
    for noti in notis:
        noti.is_read = True
        noti.save()
    return Response({ 'message': 'Todo leído'})
