from django.shortcuts import render

def gallery(request):
    images = [f"https://assets.codepen.io/721952/{i}.jpg" for i in range(12)]
    return render(request, "gallery.html", {"images": images})

def home(request):
    return render(request, 'index.html')

def base(request):
    return render(request, "base.html", {})

def acerca(request):
    return render(request, "acercaProyecto.html", {})

def proyecto(request):
    return render(request, "proyecto.html", {})

def contacto(request):
    return render(request, "contacto.html", {})

def nosotros(request):
    return render(request, "sobreNosotros.html", {})


