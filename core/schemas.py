from ninja import Schema


class MessageOut(Schema):
    message: str
    status: int | None
