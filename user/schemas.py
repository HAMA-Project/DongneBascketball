from ninja import Schema


class UserIn(Schema):
    username: str
    email: str
    password: str
