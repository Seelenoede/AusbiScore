from django.shortcuts import render
from django.db import connection


# Create your views here.
def wocheneintrag(request):
    return render(request, 'page/wocheneintrag/page.html', {})


def query_function(query):
    cur = connection.cursor()
    cur.execute(query)
    return cur.fetchall()


def wocheneintrag_js(request):
    bericht_data = query_function('SELECT `Besonderes`, `Lernfeld`, `Stunden`, `Eintrag`, `Ist_Vollständig`, DATE_FORMAT(`Datum`, "%Y-%m-%d") as Datum  FROM bericht')
    print (bericht_data)

    return render(request, 'page/wocheneintrag/scoped-javascript.js', {"bericht_data" : bericht_data})
