from django.db import models

# Create your models here.
class Userdetails(models.Model):
    name=models.CharField(max_length=100)
    password=models.CharField(max_length=100)

    class Meta:
        db_table='userinfo'