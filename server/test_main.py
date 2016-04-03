from flask.ext.testing import TestCase  
from app import create_app
# from entry import app
import os
from database import db
from models.invengine import User, Invite
from testingdata import data
test_data = data()

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
                              contacts=test_data.contacts)
        user_test_2 = User(email='ayy@bar.com',
                              token='werweraddzzzzzz',
                              contacts=test_data.contacts)
        db.session.add(user_test_1)
        db.session.add(user_test_2)
        db.session.commit()
        count = User.query.count()
        assert count == 2

    def test_model_invite_user_relations(self):
        data = test_data.raw_data
        user_test_1 = User(email='foo@bar.com',
                              token='aopfwpieaprjoea',
                              contacts=test_data.contacts)
        invite_test_1 = Invite(user=user_test_1,
                          url= data['url'],
                          owner_email=data['owner_info']['email'],
                          owner_info=data['owner_info'],
                          recipients=data['invites'],
                          finished_sending=[ {'email': 'testachiotestronaut@gmail.com',
                                'done' : True} ],
                          raw=data)
        invite_test_2 = Invite()
        user_test_1.invites_history.append(invite_test_1)
        db.session.add(user_test_1)
        db.session.add(invite_test_1)
        db.session.add(invite_test_2)
        db.session.commit()
        assert user_test_1.email == 'foo@bar.com'
        user_query = User.query
        invite_queries = Invite.query
        print user_query
        print invite_queries
        assert user_query.count() == 1
        assert user_query[0].email == 'foo@bar.com'
        assert user_query[0].id == 1
        u1 = User.query.get(1)
        invites = u1.invites_history.all()
        invite = invites[0]
        assert invite.id == 1
        assert invite.user.token == 'aopfwpieaprjoea'
        # assert invite.finished_sending == False
        # assert invite_queries[0].user.token == 'aopfwpieaprjoea'
        # for k, v in user_query[0].invites_history:
        # print('hello', user_query[0].invites_history)
        # assert user_query[0].invites_history.finished_sending==False
        assert u1.token == 'aopfwpieaprjoea'
        
        # assert user_test_1.invites_history.recipients == data['invites']
        # second_user_query = User.query[0]
        # assert second_user_query.id == 1
        # assert second_user_query.email == 'foo@bar.com'
        # assert second_user_query.token == 'aopfwpieaprjoea'
        # assert second_user_query.invites_history.recipients == data['invites']
        # assert second_user_query.invites_history.url == data['url']
        # assert second_user_query.invites_history.owner_info == data['owner_info']

       

        assert invite_queries.count() == 2
        db.session.commit()      

    def test_model_user_properties(self):
        pass

    def test_relationship_between_user_invite(self):
        pass
