from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import render, redirect
from django.contrib import messages
from api.authentication.serializers import RegisterSerializer
from django.core.mail import send_mail
from api.user.models import User
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site  
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import generics

class RegisterViewSet(viewsets.ModelViewSet):
    http_method_names = ["post"]
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
            

        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user.role = "email_not_confirmed"
        mail_subject = "Подтверждение регистрации на ProStudy" 
        to_email = serializer.data.get("email")
        send_mail(
            mail_subject,
            message="Привет! Это команда ProStudy! Вы успешно зарегистрировались на нашем сайте",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[to_email],
            fail_silently=False,
        )

        return Response(
            {
                "success": True,
                "userID": user.id,
                "msg": "The user was successfully registered",
            },
            status=status.HTTP_201_CREATED,
        )

