from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.

class Mentor(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    user = models.ForeignKey("api_user.User", on_delete=models.CASCADE)
    consultation_cost = models.CharField(max_length=100)
    biography = models.TextField()
    photo = CloudinaryField("image", null=True, blank=True)
    photo_url = models.CharField(max_length=1000, null=True, blank=True)
    university = models.CharField(max_length=100)
    level_of_education = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    graduation_year = models.IntegerField()
    proof_of_degree = CloudinaryField("document", null=True, blank=True)
    proof_of_degree_url = models.CharField(max_length=1000, null=True, blank=True)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name