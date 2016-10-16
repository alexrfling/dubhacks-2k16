from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.project_search, name='project_search'),
    url(r'^dev_search.html$', views.dev_search, name='item_list')
    #url(r'^item_chart.html$', views.item_chart, name='item_chart'),
    #url(r'^elements.html$', views.elements, name='elements')
]
