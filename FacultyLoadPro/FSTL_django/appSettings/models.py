from django.db import models

# Create your models here.
class Setting(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False, default='settings_name')
    value = models.CharField(max_length=200, blank=True, null=False, default='')