from django.shortcuts import render

# Create your views here.

def register_view(request):
	return render(request, 'page/register/page.html', {})

def register(request):
	return HttpResond('success')
