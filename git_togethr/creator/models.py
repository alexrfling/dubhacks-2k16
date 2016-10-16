from __future__ import unicode_literals

# Create your models here.
from django.db import models
from django.utils import timezone


class Creator(models.Model):
    user = models.ForeignKey('auth.User')
    name = models.CharField(max_length=200)
    bio = models.TextField()
    area = models.IntegerField();
    interest = models.CharField()
    project = models.ForeignKey('Project')
    skills = models.CharField();

    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name