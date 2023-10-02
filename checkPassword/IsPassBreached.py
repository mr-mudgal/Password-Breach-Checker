from hashlib import sha1
from requests import request as req


def result(pswd):
	pswd = sha1(pswd.encode('utf-8')).hexdigest()
	result = req('GET', f'https://api.pwnedpasswords.com/range/{pswd[:5]}')

	for i in result.text.split('\n'):
		if i.split(':')[0] == pswd[5:].upper():
			return int(i.split(':')[1])
	return 0
