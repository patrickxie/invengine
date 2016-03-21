import unittest
from redis import Redis
from rq import Queue
from rq import push_connection, pop_connection
import time
import random

def helloTest(variable):
    print('your variable is: ', variable)
    return variable


class MyTest(unittest.TestCase):
    def setUp(self):
        push_connection(Redis())

    def tearDown(self):
        pop_connection()

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
        time.sleep(3)
        for i in jobz:
          assert i["j"].result == i["arg"]

