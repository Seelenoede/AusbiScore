from django.shortcuts import render
from django.db import connection

from anmeldung.models import User

# Create your views here.

def anmelde_view(request):
	with connection.cursor() as cursor:
		cursor.execute('SELECT * FROM anmeldung')
		data = cursor.fetchall()
	for p in data:
		print(p)
	
	return render(request, 'page/anmeldung/page.html', {})

def anmeldung(request):
	if request.method == 'GET':
		username = request.GET['username']
		password = request.GET['password']
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']

	return HttpResponse('success')
	
