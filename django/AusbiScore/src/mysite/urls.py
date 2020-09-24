"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from anmeldung.views import anmelde_view, anmeldung
from wochenuebersicht.views import uebersicht_view, uebersicht_js_view
from register.views import register_view
from wocheneintrag.views import wocheneintrag

# from bearbeiten.views import bearbeiten_view #TODO

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', anmelde_view),
    path('uebersicht/scoped-javascript.js', uebersicht_js_view),
    path('uebersicht/', uebersicht_view),
    path('uebersicht', uebersicht_view),
    path('register/', register_view),
    path('anmeldung', anmeldung),
    path('wocheneintrag', wocheneintrag)
    # path ('bearbeiten', bearbeiten_view ) #TODO
]
