from rest_framework import serializers, pagination
from .models import Tweet, Cita, Comentario
from applications.users.models import User



class TweetSerializer(serializers.ModelSerializer):
    
    liked_count = serializers.SerializerMethodField( read_only=True)
    comentario_count = serializers.SerializerMethodField()

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
        ]
        
    def get_liked_count(self, obj):
        return obj.liked.all().count()

    def get_comentario_count(self, obj):
        return obj.comentario.count()
        
        
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


# Serialziador de paginacion
class PersonPaginationSerializer(pagination.PageNumberPagination):
    page_size = 5
    max_page_size = 100
    
    
class TweetSerializerId(serializers.ModelSerializer):
    
    liked_count = serializers.SerializerMethodField( read_only=True)
    comentario_count = serializers.SerializerMethodField()
    comentario = ComentarioSerializer(many=True)

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
            'comentario', 
        ]
        
    def get_liked_count(self, obj):
        return obj.liked.all().count()

    def get_comentario_count(self, obj):
        return obj.comentario.count()
    
