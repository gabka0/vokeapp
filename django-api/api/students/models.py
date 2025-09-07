from django.db import models
# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    user = models.ForeignKey("api_user.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.first_name