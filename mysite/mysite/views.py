from pyexpat.errors import messages
from django.contrib import messages
from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponseRedirect

def home(request):
    return render(request, 'index.html')

def base(request):
    return render(request, "base.html", {})

def acerca(request):
    return render(request, "acercaProyecto.html", {})

def contacto(request):
    return render(request, "contacto.html", {})

def costos(request):
    return render(request, "costos.html", {})

def funcionamiento(request):
    return render(request, "funcionamiento.html", {})

def proyecto(request):
    return render(request, "proyecto.html", {})

def nosotros(request):
    return render(request, "sobreNosotros.html", {})

def contacto(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        correo = request.POST.get('correo')
        mensaje = request.POST.get('mensaje')

        # Enviar correo
        send_mail(
            f'Mensaje de {nombre}',
            mensaje,
            correo,
            ['lightstepkeel@gmail.com'],
        )

        messages.success(request, '¡Tu mensaje ha sido enviado correctamente!')

        # Recargar la misma página
        return HttpResponseRedirect(request.path)

    return render(request, 'contacto.html')


