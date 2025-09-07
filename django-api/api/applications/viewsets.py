from .serializers import ApplicationSerializer
from .models import Application
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from api.user.models import User
from django.core.mail import send_mail
from django.conf import settings

class ApplicationView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ApplicationSerializer
    queryset = Application.objects.all()

class CreateApplicationViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["post"]
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        application = Application.objects.create(
            sender=request.user,
            sendername=request.user.username,
            recipientname=User.objects.get(id=request.data.get("reciever")).username,
            reciever=User.objects.get(id=request.data.get("reciever")),
            message=request.data.get("message"),
            state="pending",
        )
        application.save()
        send_mail(
            subject="У Вас новая заявка",
            message="У Вас новая заявка",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[application.reciever.email],
            fail_silently=False,
        )
        return Response({"success": True}, status.HTTP_200_OK)
    
class AcceptApplicationViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["post"]
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        # breakpoint()
        application_id = request.data
        application = Application.objects.get(id=application_id)
        sender = application.sender
        sender.phone = application.sender.phone_number
        application.state = "accepted"
        application.save()
        send_mail(
            subject="Пришел ответ по вашей заявке",
            message="Привет! Это команда ProStudy! На вашу заявку пришел ответ, ожидайте скоро с вами свяжутся 😊",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[application.sender.email],
            fail_silently=False,
        )
        send_mail(
            subject="Отправляем Вам контакты вашего ученика",
            message="Привет! Это команда Prostudy! Свяжитесь с Вашим учеником и договоритесь о первой оффлайн/онлайн встрече для обсуждения всех деталей совместной работы! Желаем вам удачи! Контакты вашего ученика: Почта: " + application.sender.email + " Телефон: " + application.sender.phone,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[application.reciever.email],
            fail_silently=False,
        )
        return Response({"success": True }, status.HTTP_200_OK)
    
class GetApplicationSenderContactsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["post"]
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        application_id = request.data
        application = Application.objects.get(id=application_id)
        return Response({"success": True, "phone_number": application.sender.phone_number, "email": application.sender.email }, status.HTTP_200_OK)