from django.shortcuts import render
from django.db import connection
from json import dumps

# Create your views here.

def uebersicht_view(request):
	return render(request, 'page/wochenuebersicht/page.html', {})


def show_wochenuebersicht(request):
	cur = connection.cursor()
	cur.execute('SELECT `Datum` FROM bericht')
	data = cur.fetchall()
	# print(data)
	# print(type(data))

	dataJSON = dumps(data)
	print(dataJSON)
	return render(request, 'page/wochenuebersicht/page.html', {'data': dataJSON})