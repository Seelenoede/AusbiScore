from django.shortcuts import render
from django.db import connection
from json import dumps
from datetime import datetime

def uebersicht_view(request):
    return render(request, 'page/wochenuebersicht/page.html', {})


def query_function(query):
    cur = connection.cursor()
    cur.execute(query)
    return cur.fetchall()


def uebersicht_js_view(request):
    bericht_data = query_function('SELECT `Tag`, DATE_FORMAT(`Datum`, "%Y-%m-%d") as Datum, `Ist_Vollständig` FROM bericht')
    print(bericht_data)



    return render(request, 'page/wochenuebersicht/scoped-javascript.js',{"bericht_data": bericht_data})

