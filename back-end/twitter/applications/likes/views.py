from django.contrib.auth.models import User
from tweets.models import Tweet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import TweetSerializer

# Create your views here.

@api_view(['POST'])
def like(request, pk):
    tweet = Tweet.objects.get(pk=pk)
    if request.user in tweet.liked.all():
        tweet.liked.remove(request.user)
        return Response({'status': 'ok'})
    else:
        tweet.liked.add(request.user)
        return Response({'status': 'ok'})
    
@api_view(['GET'])
def list_like(_request, pk):
    tweets = Tweet.objects.filter(pk=pk)
    serializer = TweetSerializer(tweets, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_user_likes(_request, username):
    user = User.objects.get(username=username)
    tweets = Tweet.objects.filter(liked=user)
    serializer = TweetSerializer(tweets, many=True)
    return Response(serializer.data)