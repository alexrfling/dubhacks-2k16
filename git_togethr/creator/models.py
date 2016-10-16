from __future__ import unicode_literals

# Create your models here.
from django.db import models


class User(models.Model):
    name = models.CharField(max_length=200)
    bio = models.TextField()
    area = models.IntegerField()
    interest = models.CharField()
    project = models.ForeignKey('Project')
    skills = models.CharField()

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=200)
    desc = models.TextField()
    creator = models.ForeignKey('User')
    contributors = 
