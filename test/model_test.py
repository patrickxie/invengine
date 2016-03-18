# def func(x):
#     return x + 1

# def test_answer():
#     assert func(4) == 5

# def test_model():
#     from server import app
#     app = app.create_app()

# from server import app
# import server.app as app
# from server.models.invengine import User

# from server.models import Kitten

# app = app.create_app()

def pytest_funcarg__myfuncarg(request):
    return 42

def test_function(myfuncarg):
    assert myfuncarg == 17