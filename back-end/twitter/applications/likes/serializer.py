from rest_framework import serializers
from ..tweets.models import Tweet
from . models import Notificacion

#Serializador del Tweet
class TweetSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField(read_only=True)
    usuario = serializers.SerializerMethodField(read_only=True)
    liked_users = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tweet
        fields = ['id', 'usuario', 
                  'contenido', 
                  'multimedia', 'likes_count', 'liked_users']
    def get_likes_count(self, obj):
        return obj.liked.all().count()
    def get_liked_users(self, obj):
        return [{'id': user.id, 'first_name': user.firs_name, 'last_name': user.last_name} for user in obj.liked.all()]
    def get_usuario(self, obj):
        return [{'id': obj.usuario.id, 'first_name': obj.usuario.firs_name, 'last_name': obj.usuario.last_name,}]
    

#Serializador de la notificación

class NotiSerializer(serializers.ModelSerializer):
    
    para_usuario = serializers.SerializerMethodField(read_only=True)
    de_usuario = serializers.SerializerMethodField(read_only=True)
    tweet = TweetSerializer(read_only=True)

    class Meta:
        model = Notificacion
        fields = ['id','de_usuario', 'para_usuario', 'tipo', 'tweet', 'comentario', 'created_at', 'is_read']
    def get_para_usuario(self, obj):
        return [{'id': obj.para_usuario.id, 'first_name': obj.para_usuario.firs_name, 'last_name': obj.para_usuario.last_name,}]
    def get_de_usuario(self, obj):
        return [{'id': obj.de_usuario.id, 'first_name': obj.de_usuario.firs_name, 'last_name': obj.de_usuario.last_name,}]
