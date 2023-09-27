#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2023/9/27 19:39
# @Author  : Sundy_Loly
# @File    : compress_game_js.py.py
# @Software: PyCharm

import os


def func(tu):
    list_file = []
    for i in tu:
        if not i[1]:
            path = str(i[0]) + '\\' + str(*i[2])
            list_file.append(path)
    return list_file


def combine_file():
    # 读取指定路径下的所有文件并放入到列表中
    root_menu = "./game/static/js/src/menu"
    root_playground = "./game/static/js/src/playground"
    root_settings = "./game/static/js/src/settings"

    menu_names = os.walk(root_menu)
    playground_names = os.walk(root_playground)
    settings_names = os.walk(root_settings)

    file = [*func(menu_names), *func(playground_names), *func(settings_names), './game/static/js/src/zbase.js']

    w = open("./game/static/js/dist/game.js", 'w', encoding='utf-8')

    for f in file:
        with open(f, encoding='utf-8') as obj:
            context = obj.read()
            w.write(context)

    w.close()


combine_file()
