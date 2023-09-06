from django.http import HttpResponse

# Create your views here.

def index(request):
    line1='''<h1 style="text-align: center">我的第一个网页!!!!</h1>
    <img src="https://cdn.acwing.com/media/file_system/file/application/icon/01be01554421020000019ae93ff35c.jpg1280w_1l_2o_100sh_LBjQxh6.jpg" width=800>
    '''
    return HttpResponse(line1)

