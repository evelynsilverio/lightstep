from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def base(request):
    return render(request, "base.html", {})

def acerca(request):
    return render(request, "acercaProyecto.html", {})

def contacto(request):
    return render(request, "contacto.html", {})

def nosotros(request):
    return render(request, "sobreNosotros.html", {})
