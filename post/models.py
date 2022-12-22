from django.db import models


class BasePostModel(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField(max_length=500)
