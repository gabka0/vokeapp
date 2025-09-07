from django.db import models
from django_fsm import FSMField, transition
from django.core.mail import send_mail

from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, role=None, phone_number=None, **kwargs):
        """Create and return a `User` with an email, username and password."""
        if username is None:
            raise TypeError("Users must have a username.")
        if email is None:
            raise TypeError("Users must have an email.")

        user = self.model(username=username, email=self.normalize_email(email), role=role, phone_number=phone_number)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password, role="admin", phone_number="admin"):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError("Superusers must have a password.")
        if email is None:
            raise TypeError("Superusers must have an email.")
        if username is None:
            raise TypeError("Superusers must have an username.")

        user = self.create_user(username, email, password, role, phone_number)
        user.is_superuser = True
        user.is_staff = True
        
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255)
    email = models.EmailField(db_index=True, unique=True)
    is_active = models.BooleanField(default=True)
    date = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    role = models.CharField(max_length=50)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    phone_number = models.CharField(max_length=20, blank=True, null=False)

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

    def is_staff(self):
        return self.is_staff
    
    @transition(field=role, source='user', target='mentor_not_approved')
    def apply_for_mentor(self):
        pass

    @transition(field=role, source='mentor_not_approved', target='mentor_approved')
    def approve_mentor(self):
        pass
    
