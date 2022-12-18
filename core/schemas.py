from typing import Optional

from ninja import Schema


class MessageOut(Schema):
    message: str
    status: Optional[int]
