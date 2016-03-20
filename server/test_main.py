from flask.ext.testing import TestCase  
from app import create_app
# from entry import app
import os
from database import db

TEST_SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']

class MyTest(TestCase):
    TESTING = True
    def create_app(self):
        # app.config['SQLALCHEMY_DATABASE_URI'] = TEST_SQLALCHEMY_DATABASE_URI
        # return 
        #inject db
        self.app = create_app()
        return self.app

    def test_setUp(self):
        # with app.test_request_context():
        from models.invengine import User
        db.create_all()


        contacts =[ 
          { "first_name":"Alan",
            "last_name":"Webb", 
            "email":"alanwalker@yahoo.com"},
          { "first_name":"Teresa",
            "last_name":"Parker",
            "email":"teresa@hotmail.com"}
            ]
        # uinstance = u(email='testachiotestronaut@gmail.com' )
        user_test_1 = User(email='foo@bar.com',
                              token='aopfwpieaprjoea',
                              contacts=contacts)
        user_test_2 = User(email='ayy@bar.com',
                              token='werweraddzzzzzz',
                              contacts=contacts)
        db.session.add(user_test_1)
        db.session.add(user_test_2)
        count = User.query.count()
        assert count == 2

    def test_tearDown(self):
        db.session.remove()
        db.drop_all()