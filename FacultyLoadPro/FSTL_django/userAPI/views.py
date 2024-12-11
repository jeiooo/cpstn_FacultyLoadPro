from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer

# Test View
class TestView(APIView):
    def get(self, request, format=None):
        print("API WAS CALLED!")
        return Response("userAPI Views WORKSS!!", status=200)
    
# Create User View
class UserView(APIView):
    def post(self, request, format=None):
        print("Create a user")

        user_data = request.data
        print(request.data)

        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid(raise_exception=False):
            user_serializer.save()
            return Response({"user": user_serializer.data}, status=200)

        return Response({"msg": "ERRRR!"}, status=400)

# User Login View
class UserLoginView(APIView):
    # Convert user token to user data
    def get(self, request, format=None):
        if not request.user.is_authenticated or not request.user.is_active:
            return Response("Invalid Credentials", status=400)
        
        user = UserSerializer(request.user)
        return Response(user.data, status=200)
    
    def post(self, request, format=None):
        print("login class")

        username_or_email = request.data.get("username")  # Use get() to avoid KeyError
        password = request.data.get("password")

        # Check if username/email and password are provided
        if not username_or_email or not password:
            return Response({"message": "Username or email and password are required"}, status=400)

        # Try to find user by email or username
        user_obj = None
        if "@" in username_or_email:
            user_obj = User.objects.filter(email=username_or_email).first()
        else:
            user_obj = User.objects.filter(username=username_or_email).first()

        if user_obj:
            credentials = {
                'username': user_obj.username,
                'password': password
            }
            user = authenticate(**credentials)

            if user and user.is_active:
                user_serializer = UserSerializer(user)
                return Response(user_serializer.data, status=200)
            else:
                return Response({"message": "Invalid credentials or account not active"}, status=401)
        
        return Response({"message": "User not found"}, status=404)
