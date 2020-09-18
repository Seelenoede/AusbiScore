from django.shortcuts import render

# Create your views here.

def uebersicht_view(request):
	# Get wocheneinträge from database
	print("Test")
	return render(request, 'page/wochenuebersicht/page.html', {})
