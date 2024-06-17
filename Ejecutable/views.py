from django.shortcuts import render

def intranet_home(request):
    return render(request, 'intranet_home.html')
