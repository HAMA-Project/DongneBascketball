from ninja import Schema


class EmailIn(Schema):
    email: str

    # @validator("email")
    # def email_form_validation(cls, v):
    #     email_form = re.compile(r"^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
    #     if email_form.match(v) is None:
    #         return {"message": "올바른 이메일을 작성해주세요."}


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
