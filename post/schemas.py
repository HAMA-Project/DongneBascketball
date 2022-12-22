from ninja import ModelSchema, Schema

from post.models import FreeBoard


class FreeBoardIn(Schema):
    title: str
    content: str


class FreeBoardOut(ModelSchema):
    class Config:
        model = FreeBoard
        model_fields = "__all__"
