from django.shortcuts import render

# Create your views here.
def wocheneintrag(request):
    return render(request, 'page/wocheneintrag/page.html', {})