from django.contrib.auth import authenticate, login
from ninja import NinjaAPI

from core.schemas import MessageOut
from user.models import User
from user.schemas import DuplicateOut, EmailIn, LoginUserIn, SignupUserIn, UsernameIn

api = NinjaAPI()


@api.post(path="/duplicates/email", response=DuplicateOut)
def check_email(request, payload: EmailIn):
    try:
        User.objects.get(email=payload.email)
        return {"duplicate": True}
    except User.DoesNotExist:
        return {"duplicate": False}


@api.post(path="/duplicates/username", response=DuplicateOut)
def check_username(request, payload: UsernameIn):
    try:
        User.objects.get(username=payload.username)
        return {"duplicate": True}
    except User.DoesNotExist:
        return {"duplicate": False}


@api.post(path="/signup", response=MessageOut)
def signup_user(request, payload: SignupUserIn):
    return User.objects.create_user(**payload.dict())


@api.post(path="/login", response={200: MessageOut, 400: MessageOut})
def login_user(request, payload: LoginUserIn):
    try:
        User.objects.get(email=payload.email)
        user = authenticate(request, email=payload.email, password=payload.password)
        if not user:
            return 400, {"message": "user password incorrect"}
    except User.DoesNotExist:
        return 400, {"message": "user does not exist"}

    login(request, user)
    return 200, {"message": "success"}
