from waitress import serve
from Web_Page.wsgi import Ejecutable

if __name__ == '__main__':
    serve(application, host='127.0.0.1', port=8000)
