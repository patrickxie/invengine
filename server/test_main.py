from flask.ext.testing import TestCase  
from app import create_app
# from entry import app
import os
from database import db
from models.invengine import User, Invite
TEST_SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
print TEST_SQLALCHEMY_DATABASE_URI

class MyTest(TestCase):
    TESTING = True
    def create_app(self):
        # app.config['SQLALCHEMY_DATABASE_URI'] = TEST_SQLALCHEMY_DATABASE_URI
        # return 
        #inject db
        self.app = create_app()
        return self.app

    def setUp(self):
        # with app.test_request_context():
        db.drop_all()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_model_user(self):
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

    def test_model_invite(self):
        # invite_test_1 = Invite()

    def test_model_user_properties(self):
        pass

    def test_relationship_between_user_invite(self):
        pass
