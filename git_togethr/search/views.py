from django.shortcuts import render

# Create your views here.
def project_search(request):
    return render(request, 'project_search.html', {})

def dev_search(request):
    return render(request, 'dev_search.html', {})

def index(request):
    return render(request, 'index.html', {})
def messages(request):
    return render(request, 'messages.html', {})
def teams(request):
    return render(request, 'teams.html', {})
def edit(request):
    return render(request, 'edit_profile.html', {})
def create(request):
    return render(request, 'create_project.html', {})
def profile(request):
    return render(request, 'profile.html', {})
