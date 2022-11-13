from ninja import Schema


class UserIn(Schema):
    username: str | None
    email: str
    password: str
