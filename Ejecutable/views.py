from django.shortcuts import render

def intranet_home(request):
    return render(request, 'intranet_home.html')

def login_view(request):
    return render(request, 'login.html')