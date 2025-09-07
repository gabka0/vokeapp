from django.db import models
from django_fsm import FSMField, transition


# Create your models here.

class Application(models.Model):
    id = models.AutoField(primary_key=True)
    message = models.TextField()
    sender = models.ForeignKey("api_user.User", on_delete=models.CASCADE, related_name="sender")
    sendername = models.CharField(max_length=255, default="none")
    reciever = models.ForeignKey("api_user.User", on_delete=models.PROTECT, related_name="reciever")
    recipientname = models.CharField(max_length=255, default="none")
    state = models.CharField(max_length=255, default="new")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.message

    class Meta:
        db_table = "applications"
        verbose_name = "Application"
        verbose_name_plural = "Applications"