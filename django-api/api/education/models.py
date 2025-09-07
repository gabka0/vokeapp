from django.db import models
from api.mentors.models import Mentor
# Create your models here.

class Education(models.Model):
    school_name = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    field_of_study = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    proof_of_education = models.FileField(upload_to="mentors/education/", null=False, blank=False)
    mentor = models.ForeignKey("api_mentors.Mentor", on_delete=models.CASCADE)

    def __str__(self):
        return self.school_name
    
    #Photo upload
    #360x360