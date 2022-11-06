from django.db import models


class TimeStampedModel(models.Model):
    create_dt = models.DateTimeField("Create date time", auto_now_add=True, null=True)
    update_dt = models.DateTimeField("Update date time", auto_now=True, null=True)

    class Meta:
        abstract = True


class SoftDeleteModel(models.Model):
    is_delete = models.BooleanField("Is deleted?", default=False)
    delete_dt = models.DateTimeField("Deleted date time", null=True, blank=True)

    class Meta:
        abstract = True


class BaseModel(TimeStampedModel, SoftDeleteModel):
    class Meta:
        abstract = True
