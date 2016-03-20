# from unittest import TestCase
# from mock import patch, MagicMock
# import inspect

# from rq import Queue
# from rq.job import Job
# from worker import conn

# q = Queue(connection=conn)


# class TestRedisModule(TestCase):
#     def setUp(self):
#         """
#         Setting up Redis connection
#         """
#         push_connection(Redis())

#     def tearDown(self):
#         """
#         Shutting down Redis connection
#         """
#         pop_connection()

#     def tasks(self):
#       pass
#     def test_Models(self):
#         """
#         We want to test that the hello method calls the say function with the string "hello:
#         """
#         # from models.invengine import User
#         u = self.user
#         # assert u.ayyy == 'lmao'
#         # assert u.__tablename__ == 'users'
#         # assert inspect.isclass(u)
#         uinstance = u('testachiotestronaut@gmail.com, { 'michael': '408123456', 'sharon': 'sharon@example.com')

# import unittest
# from rq import Queue
# from rq import push_connection, pop_connection

# class MyTest(unittest.TestCase):
#     def setUp(self):
#         push_connection(Redis())

#     def tearDown(self):
#         pop_connection()

#     def test_foo(self):
#         """Any queues created here use local Redis."""
#         q = Queue()
#         ...