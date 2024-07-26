from django.shortcuts import render

def intranet_home(request):
    return render(request, 'index.html')

def login_view(request):
    return render(request, 'login.html')

def perfil_view(request):
    return render(request, 'ingreso.html')

def principal_view(request):
    return render(request, 'principal.html')

def record_academico_view(request):
    return render(request, 'record_academico.html')