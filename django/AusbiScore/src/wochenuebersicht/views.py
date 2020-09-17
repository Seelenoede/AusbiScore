from django.shortcuts import render
from django.db import connection
from json import dumps

# Create your views here.

def uebersicht_view(request):

	cur = connection.cursor()
	cur.execute('SELECT * FROM bericht')
	data = cur.fetchall()
	print(data)
	print(type(data))

	# return render(request, 'page/wochenuebersicht/page.html', {})
	dataJSON = dumps(data)
	return render(request, 'page/wochenuebersicht/page.html', {'data': dataJSON})




