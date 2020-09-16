from django.shortcuts import render

# Create your views here.

def uebersicht_view(request):
	# Get wocheneinträge from database
	return (request, 'page/wochenuebersicht/page.html', {})
