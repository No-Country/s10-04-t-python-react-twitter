from rest_framework import serializers, pagination
from .models import Tweet, Cita, Comentario
from applications.users.models import User



class TweetSerializer(serializers.ModelSerializer):
    
    liked_count = serializers.SerializerMethodField( read_only=True)
    comentario_count = serializers.SerializerMethodField()
    retweet = serializers.SerializerMethodField()

    class Meta:
        model = Tweet
        fields = [
            'id',
            'usuario',
            'contenido',
            'multimedia',
            'gif',
            'created',
            'liked_count',  
            'comentario_count', 
            'retweet', 
        ]
        
    def get_liked_count(self, obj):
        return obj.liked.all().count()

    def get_comentario_count(self, obj):
        return obj.comentario.count()
    
    def get_retweet(self, obj):
        return obj.retweet.count()
        
        
class CitaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Cita
        fields = ('__all__')
        

class ComentarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comentario
        fields = [
        'id', 
        'usuario', 
        'tweet_original', 
        'content', 
        'created_at',
        'multimedia',
        'gif',
    ]

 
class TweetSerializerId(serializers.ModelSerializer):
    
    liked_count = serializers.SerializerMethodField( read_only=True)
    comentario_count = serializers.SerializerMethodField()
    comentario = ComentarioSerializer(many=True)
    retweet = serializers.SerializerMethodField()
    class Meta:
        model = Tweet
        fields = [
            'usuario',
            'contenido',
            'multimedia',
            'gif',
            'created',
            'liked_count',  
            'comentario_count', 
            'retweet', 
            'comentario',
        ]
        
    def get_liked_count(self, obj):
        return obj.liked.all().count()

    def get_comentario_count(self, obj):
        return obj.comentario.count()
    
    def get_retweet(self, obj):
        return obj.retweet.count()


class RetweetSerializer(serializers.Serializer):
    tweet_id = serializers.IntegerField()


# Serialziador de paginacion
class PersonPaginationSerializer(pagination.PageNumberPagination):
    page_size = 30
    max_page_size = 100
    