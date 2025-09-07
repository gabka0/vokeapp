from django.contrib import admin
from .models import Mentor
from django.utils.http import urlencode

# Register your models here.

admin.site.register(Mentor)
class MentorAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "first_name", "last_name", "email", "phone")
    
    def view_education_link(self, obj):
        return format_html('<a href="/admin/education/education/?mentor__id__exact={}">View Education</a>', obj.id)