# from auth import AuthBearer
from django.contrib.auth.hashers import check_password
from ninja import NinjaAPI

from core.schemas import MessageOut
from user.models import User
from user.schemas import UserIn

api = NinjaAPI()


@api.post(path="signup", response={200: MessageOut, 400: MessageOut})
def create_user(request, payload: UserIn):
    return User.objects.create_user(**payload.dict())


@api.post(path="login", response={201: MessageOut, 401: MessageOut})
def login_user(request, payload: UserIn):
    try:
        user = User.objects.get(email=payload.email)
        if not check_password(payload.password, user.password):
            return 401, {"message": "user password incorrect"}
    except User.DoesNotExist:
        pass

    return User.objects.create_user(**payload.dict())
