from django.db import models

# Create your models here.
class User(models.Model):
	UserName = models.CharField(max_length=50)
	Passwort = models.CharField(max_length=500)
