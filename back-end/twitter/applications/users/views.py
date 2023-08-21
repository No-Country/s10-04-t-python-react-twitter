# Rest Framework
from rest_framework import  permissions
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.generics import (
    CreateAPIView,
    RetrieveAPIView,
)
#D Django
from django.urls import reverse_lazy
from django.contrib.auth import logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate, login
# Models
from .models import User
# Serializers
from .serializers import (
    UserLoginSerializers, 
    UserRegisterSerializers,
    UserDetailSerializers,
)


# Register User 
class UserRegistrationView(CreateAPIView):
    
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializers

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserRegisterSerializers(user, context=self.get_serializer_context()).data,
            "message": "User registered successfully!"
        })


# Login User
class UserLogin(APIView):
    
    serializer_class = UserLoginSerializers
    permission_classes = (permissions.AllowAny,)
    

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if email and password:
            user = authenticate(request, email=email, password=password)
            if user:
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)
               
                return Response({
                    'id': user.id,
                    'token': token.key,
                    
                    })
            else:
                return Response({'error': 'Invalid credentials'}, status=400)
        else:
            return Response({'error': 'Email and password1 are required'}, status=400)


# Logout User
class LogoutView(APIView):
    
    def post(self, request):
        logout(request)
        return Response({'message': "Logout successful"})
    

# Detail User
class DetailAPIView(RetrieveAPIView):
    
    serializer_class = UserDetailSerializers 
    authentication_classes = (TokenAuthentication,)   
    permission_classes = [IsAuthenticated]
    
    queryset = User.objects.all()
    login_url = reverse_lazy('/')


# Como de deve enviar el Token Authorization Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b