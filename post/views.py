from ninja import NinjaAPI

api = NinjaAPI(version="index", docs_url="/api/docs/")


@api.get(path="/")
def home(request):
    return "ok"
