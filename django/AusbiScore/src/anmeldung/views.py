from django.shortcuts import render, reverse, redirect
from django.db import connection
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
#from django.urls import reverse

import json
import hashlib

# Create your views here.

def anmelde_view(request):
	return render(request, 'page/anmeldung/page.html', {})

@csrf_exempt
def anmeldung(request):
	bodyData = request.body.decode('utf-8')
	body = json.loads(bodyData)
	#print(body)
	
	if request.method == 'POST':
		username = body['user']
		password = body['passwort']
		
	#print(username)
	#print(password)

	with connection.cursor() as cursor:
		cursor.execute(
			"SELECT * FROM anmeldung WHERE UserName='" +
			username +
			"' AND Passwort='" +
			hashlib.sha512(password.encode(encoding="utf-8")).hexdigest() +
			"';"
		)
		data = cursor.fetchall()
	
	#print(data)
	
	if len(data) == 1:
		#return redirect(reverse('uebersicht:uebersicht_view'))
		return HttpResponse("page/wochenuebersicht")
	else:
		return HttpResponse('Login fehlgeschlagen', status=401)
	
