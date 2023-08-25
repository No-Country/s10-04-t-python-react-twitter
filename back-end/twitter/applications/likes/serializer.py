from rest_framework import serializers
from ..tweets.models import Tweet

class TweetSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField(read_only=True)
    usuario = serializers.ReadOnlyField(source='usuario.username')
    class Meta:
        model = Tweet
        fields = ['id', 'usuario', 
                  'contenido', 
                  'imagen',
                  'video', 'liked', 'likes_count']
    def get_likes_count(self, obj):
        return obj.liked.all().count()
    