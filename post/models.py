from django.db import models


class BasePostModel(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class FreeBoard(BasePostModel):
    class Meta:
        db_table = "post_freeboard"
        verbose_name = "Freeboard"
        verbose_name_plural = "Freeboard"
