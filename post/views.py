from typing import List

from ninja import NinjaAPI
from ninja.pagination import LimitOffsetPagination, paginate
from ninja.security.session import SessionAuth

from core.schemas import MessageOut
from post.models import FreeBoard
from post.schemas import FreeBoardIn, FreeBoardOut

api = NinjaAPI(version="index", docs_url="/api/docs/", csrf=True)


@api.get(path="/", auth=SessionAuth())
def home(request):
    return "ok"


@api.get(path="/freeboards", response=List[FreeBoardOut])
@paginate(LimitOffsetPagination)
def get_freeboards(request):
    """
    자유게시판 리스트 get api
    QueryParameter: limit(default=100), offset(default=0)
    """
    return FreeBoard.objects.all().order_by("-created")


@api.post(path="/freeboards", response={200: MessageOut}, auth=SessionAuth())
def create_freeboard(request, payload: FreeBoardIn):
    """
    자유게시판 생성
    """
    FreeBoard.objects.create(**payload.dict())
    return {"message": "success", "status": 200}
