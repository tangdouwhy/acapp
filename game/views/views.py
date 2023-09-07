from django.http import HttpResponse

# Create your views here.

def index(request):
    line1='''<h1 style="text-align: center">术士之战</h1>'''
    line2='<hr>'
    line3='''<img src="https://cdn.acwing.com/media/file_system/file/application/icon/01be01554421020000019ae93ff35c.jpg1280w_1l_2o_100sh_LBjQxh6.jpg" width=800>'''
    line4='<a href="/play">进入游戏页面</a>'
    return HttpResponse(line1+line4+line2+line3)


def play(request):
    line1='<h1 style="text-align: center">游戏界面</h1>'
    line4='<hr>'
    line2='''<img src="https://clubimg.club.vmall.com/data/attachment/forum/202012/29/185053eawmecvrwrwp1urk.jpg" width=800>'''
    line3='<a href="/">返回主页面</a>'
    return HttpResponse(line1+line4+line3+line4+line2)
