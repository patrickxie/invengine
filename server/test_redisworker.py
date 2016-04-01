import unittest
from redis import Redis
from rq import Queue
from rq import push_connection, pop_connection
import time
import random

# def helloTest(variable):
#     print('der variable is: ', variable)
#     return variable

from tasks import helloTest

class MyTest(unittest.TestCase):
    def setUp(self):
        push_connection(Redis())

    def tearDown(self):
        pop_connection()

    def test_helloTest(self):
        assert 5 == helloTest(5)

    def test_foo(self):
        """Any queues created here use local Redis."""
        jobz = []
        q = Queue()
        for i in range(5):
            num = random.randint(1, 10) * 10 
            j = q.enqueue_call(func=helloTest, args=(num,), timeout=50)
            jobz.append({
              "j":j,
              "arg": num
              })
        time.sleep(1)
        for i in jobz:
          assert i["j"].result == i["arg"]

    def test_jerbs(self):
        """Any queues created here use local Redis."""
        q = Queue()
        for i in range(5):
            num = random.randint(1, 10) * 10 
            j = q.enqueue_call(func=helloTest, args=(num,), timeout=50)
            time.sleep(0.3)
            assert j.result == num

