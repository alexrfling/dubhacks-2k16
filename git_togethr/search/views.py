from django.shortcuts import render

# Create your views here.
def project_search(request):
    return render(request, 'project_search.html', {})

def dev_search(request):
    return render(request, 'dev_search.html', {})
