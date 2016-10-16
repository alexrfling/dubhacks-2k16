from django.conf.urls import url
from . import views

urlpatterns = [
    #url(r'^$', views.project_search, name='project_search'),
    url(r'^$', views.index, name='index'),
    url(r'^dev_search.html$', views.dev_search, name='item_list'),
    url(r'^index.html$', views.index, name='index'),
    url(r'^messages.html$', views.messages, name='messages'),
    url(r'^teams.html$', views.teams, name='teams'),
    url(r'^edit_profile.html$', views.edit, name='edit'),
    url(r'^create_project.html$', views.create, name='create'),
    url(r'^profile.html$', views.profile, name='profile'),



    #url(r'^item_chart.html$', views.item_chart, name='item_chart'),
    #url(r'^elements.html$', views.elements, name='elements')
]
