from django.urls import path,include
from game.views.menu.index import index

urlpatterns=[
    path("",index,name="menuindex"),
]
