# Rest
from rest_framework import serializers, pagination
# Dejango
from django.contrib.auth import authenticate
# Models
from .models import User


# User Register
class UserRegisterSerializers(serializers.ModelSerializer):
    
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = [
            'email', 
            'firs_name', 
            'birthdate',
            'avatar', 
            'password1', 
            'password2'
        ]
        extra_kwargs = {
            'password1': {'write_only': True},
            'password2': {'write_only': True},
            'is_staff': {'read_only': True},
            'is_active': {'read_only': True}
        }

    def validate(self, data):
            
        if len(data['password1']) < 5:
            raise serializers.ValidationError("Constrase;as es demasiado corta")
        elif data['password1'] != data['password2']:
            raise serializers.ValidationError("Constrase;as n coinciden")
        return data
    
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            firs_name=validated_data['firs_name'],
            birthdate=validated_data.get('birthdate', None),
            is_staff=False,  # Default value
            is_active=True   # Default value
        )
        user.set_password(validated_data['password1'])
        user.save()
        return user    
    
                
# Login User
class UserLoginSerializers(serializers.ModelSerializer):
    
    password = serializers.CharField(
        write_only=True, 
        default=False
    )

    class Meta:
        model = User
        fields = [
            'id',
            'email', 
            'password',
        ]


# Detail and Delete and Update  User
class UserDetailSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = [
            'email',
            'firs_name',
            'last_name',
            'avatar',
            'front_page',
            'birthdate',
            'bio',
            'location',
            'website',
            'followers',
            'mutual_followers',
        ]

        

# User Follower And Followin
class UserSerializer(serializers.ModelSerializer):
    
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    followers = serializers.StringRelatedField(many=True)
    following = serializers.StringRelatedField(many=True)
    mutual_followers = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = [
            'id', 
            'get_full_name', 
            'followers', 
            'following', 
            'mutual_followers', 
            'followers_count', 
            'following_count'
        ]

    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.following.count()
  

#  User Follower And Followin Detail
class UserSerializer(serializers.ModelSerializer):
    followers = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id', 
            'get_full_name', 
            'followers',
        ]

    def get_followers(self, obj):
        followers = obj.followers.all()
        return [{"id": follower.id, "get_full_name": follower.get_full_name()} for follower in followers]   
    
    
