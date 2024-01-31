from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')
def signin(request):
    return render(request,'sign_in.html')
def ayurveda(request):
    return render(request,'ayurveda.html')
def baby_care(request):
    return render(request,'baby_care.html')
def eye_care(request):
    return render(request,'eye_care.html')
def haircare(request):
    return render(request,'haircare.html')
def health_care(request):
    return render(request,'health_care')
