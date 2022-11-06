from ninja import NinjaAPI

from core.schemas import MessageOut
from user.models import User
from user.schemas import UserIn

api = NinjaAPI()


@api.post(path="signup", response={201: MessageOut, 200: MessageOut})
def create_user(request, payload: UserIn):
    return User.objects.create_user(**payload.dict())
