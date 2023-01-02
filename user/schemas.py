import re

from ninja import Schema
from ninja.schema import validator


class EmailIn(Schema):
    email: str

    @validator("email")
    def message_base_type_validation(cls, v):
        email_form = re.compile("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        if email_form.match(v) is None:
            raise ValueError("email type is not valid")


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
