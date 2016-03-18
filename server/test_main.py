import pytest

@pytest.fixture
def gg(request):
    return 42

def test_function(gg):
    assert gg == 33


# def pytest_funcarg__myfuncarg(request):
#     return 42

# def test_function(myfuncarg):
#     assert myfuncarg == 17

def test_blahblah():
    assert 5 == 5