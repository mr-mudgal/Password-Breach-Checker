from django.shortcuts import render
from .IsPassBreached import result

# Create your views here.


def home(req):
	if req.method == 'POST':
		print(result(req.POST['pswd']))
		return render(req, 'home.html', {'result': result(req.POST['pswd'])})
	return render(req, 'home.html', {'result': None})
