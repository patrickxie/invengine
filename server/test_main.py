from flask.ext.testing import TestCase  
from app import create_app
# from entry import app
import os
from database import db
from models.invengine import User, Invite
from testingdata import data
d = data()

TEST_SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
print TEST_SQLALCHEMY_DATABASE_URI

class MyTest(TestCase):
    TESTING = True
    def create_app(self):
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
        # uinstance = u(email='testachiotestronaut@gmail.com' )
        user_test_1 = User(email='foo@bar.com',
                              token='aopfwpieaprjoea',
                              contacts=d.contacts)
        user_test_2 = User(email='ayy@bar.com',
                              token='werweraddzzzzzz',
                              contacts=d.contacts)
        db.session.add(user_test_1)
        db.session.add(user_test_2)
        db.session.commit()
        count = User.query.count()
        assert count == 2

    def test_model_invite(self):
        user_test_1 = User(email='foo@bar.com',
                              token='aopfwpieaprjoea',
                              contacts=d.contacts)
        invite_test_1 = Invite()
        invite_test_2 = Invite()
        db.session.add(user_test_1)
        db.session.add(invite_test_1)
        db.session.add(invite_test_2)
        db.session.commit()      

    def test_model_user_properties(self):
        pass

    def test_relationship_between_user_invite(self):
        pass
