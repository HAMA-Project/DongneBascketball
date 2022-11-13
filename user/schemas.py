from ninja import Schema


class EmailIn(Schema):
    email: str


class UsernameIn(Schema):
    username: str


class LoginUserIn(Schema):
    email: str
    password: str


class SignupUserIn(Schema):
    email: str
    username: str
    password: str


class DuplicateOut(Schema):
    duplicate: bool
