from django.shortcuts import render

# Create your views here.
import datetime
from django.http import HttpResponse

def timeinfo(request):
    date=datetime.datetime.now()
    msg='<h1> Hello Friends Good Evening!</h1> <hr>'
    msg+=f'<h2> Now the server time is: {date}</h2>'
    return HttpResponse(msg)
    
def timeinfos(request):
    return render (request,'live_time.html')    