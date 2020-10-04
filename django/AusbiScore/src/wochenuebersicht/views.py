from django.shortcuts import render
from django.db import connection
from json import dumps
from datetime import datetime

def uebersicht_view(request):
    return render(request, 'page/wochenuebersicht/page.html', {})


def query_function(query):
    cur = connection.cursor()
    # cur = cnx.cursor()
    cur.execute(query)
    return cur.fetchall()


def uebersicht_js_view(request):
    bericht_data = query_function('SELECT `Tag`, DATE_FORMAT(`Datum`, "%Y-%m-%d") as Datum, `Ist_Vollständig` FROM bericht')
    print(bericht_data)


    monat = query_function('SELECT DISTINCT DATE_FORMAT(Datum,"%M") FROM bericht')
    print(monat)
    monat_final = []
    for i in monat:
        j= 0
        while j < len(monat):
            formated_month = monat[j][0]
            monat_final.append(formated_month)
            j = j + 1
    print(monat_final)

    jahr = query_function('SELECT DISTINCT DATE_FORMAT(Datum,"%Y") FROM bericht')
    print(jahr)
    jahr_final = []
    for i in jahr:
        j = 0
        while j < len(jahr):
            formated_jahr = jahr[j][0]
            jahr_final.append(formated_jahr)
            j = j + 1
    print(jahr_final)

    return render(request, 'page/wochenuebersicht/scoped-javascript.js',{"bericht_data": bericht_data, "monat": monat_final, "jahr": jahr_final})

