from django.shortcuts import render

# Create your views here.

def anmelde_view(request):
	print(request.headers)
	return render(request, 'page/anmeldung/page.html', {})

def anmeldung(request):
	if request.method == 'GET':
		
