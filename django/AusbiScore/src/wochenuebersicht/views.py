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
    # data_string = '{tagId:"1", datum:"2020-09-14", istVollstaendig: "1"},//mo\n{tagId:"2", datum:"2020-09-15", istVollstaendig: "1"},\n{tagId:"3", datum:"2020-09-16", istVollstaendig: "1"},\n{tagId:"4", datum:"2020-09-17", istVollstaendig: "1"},\n{tagId:"5", datum:"2020-09-18", istVollstaendig: "1"},\n{tagId:"6", datum:"2020-09-19", istVollstaendig: "1"},\n{tagId:"7", datum:"2020-09-20", istVollstaendig: "1"},\n{tagId:"8", datum:"2020-09-21", istVollstaendig: "0"},//mo\n{tagId:"9", datum:"2020-09-22", istVollstaendig: "0"},\n{tagId:"10", datum:"2020-09-23", istVollstaendig: "1"},\n{tagId:"11", datum:"2020-09-24", istVollstaendig: "1"},\n{tagId:"12", datum:"2020-09-25", istVollstaendig: "1"},\n{tagId:"13", datum:"2020-09-26", istVollstaendig: "1"},\n{tagId:"14", datum:"2020-09-27", istVollstaendig: "1"},\n{tagId:"15", datum:"2020-09-28", istVollstaendig: "1"},//mo\n{tagId:"16", datum:"2020-09-29", istVollstaendig: "1"},\n{tagId:"17", datum:"2020-09-30", istVollstaendig: "1"},\n{tagId:"18", datum:"2020-10-01", istVollstaendig: "1"},\n{tagId:"19", datum:"2020-10-02", istVollstaendig: "1"},\n{tagId:"20", datum:"2020-10-03", istVollstaendig: "1"},\n{tagId:"21", datum:"2020-10-04", istVollstaendig: "1"},\n{tagId:"22", datum:"2020-10-05", istVollstaendig: "1"},//mo\n{tagId:"23", datum:"2020-10-06", istVollstaendig: "1"},\n{tagId:"24", datum:"2020-10-07", istVollstaendig: "1"},\n{tagId:"25", datum:"2020-10-08", istVollstaendig: "0"},\n{tagId:"26", datum:"2020-10-09", istVollstaendig: "1"},\n{tagId:"27", datum:"2020-10-10", istVollstaendig: "1"},\n{tagId:"28", datum:"2020-10-11", istVollstaendig: "1"}'

    bericht_data = query_function('SELECT `Tag`, DATE_FORMAT(`Datum`, "%Y-%m-%d") as Datum, `Ist_Vollständig` FROM bericht')
    print(bericht_data)


    monat = query_function('SELECT DISTINCT DATE_FORMAT(Datum,"%M") FROM bericht')
    print(monat)
    monat_final = []
    for i in monat:
        j=0 #TODO: CREATE A LOOP to increase j
        formated_month = monat[j][0]
        monat_final.append(formated_month)

    print(monat_final)

    jahr = query_function('SELECT DISTINCT DATE_FORMAT(Datum,"%Y") FROM bericht')
    print(jahr)
    jahr_final = []
    for i in jahr:
        j=0 #TODO CREATE A LOOP to increase j
        formated_jahr = jahr[j][0]
        jahr_final.append(formated_jahr)

    print(jahr_final)

    return render(request, 'page/wochenuebersicht/scoped-javascript.js',{"bericht_data": bericht_data, "monat": monat_final, "jahr": jahr_final})

