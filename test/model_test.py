def func(x):
    return x + 1

def test_answer():
    assert func(4) == 5


from server import app

app = app.create_app()



def test_model():
    assert app