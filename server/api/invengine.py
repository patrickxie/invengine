# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from models import User, Invite #import invenine model here
import uuid


invengine_api = Api(Blueprint('invengine_api', __name__)) # pylint: disable=invalid-name

@invengine_api.resource('/contacts/<string:id>')
class ContactsAPI(Resource):
    @staticmethod
    def get():
        kittens = Kitten.query
        return [{
            'id': kitten.id,
            'created': kitten.created.isoformat() + 'Z'
        } for kitten in kittens]

    @staticmethod
    def post():
        # from app import db
        from database import db
        count = Kitten.query.count()

        if count >= 9:
            return { 'error': 'This basket is full of kittens!' }, 403

        new_kitten = Kitten()
        db.session.add(new_kitten)
        db.session.commit()

        return {
            'id': new_kitten.id,
            'created': new_kitten.created.isoformat() + 'Z'
        }



@invengine_api.resource('/users')
class UsersAPI(Resource):
    @staticmethod
    def get():
        from database import db
        tok = str(uuid.uuid4())
        new_user = User(token=tok)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'invengine_id': new_user.id, 'token': tok})

# @invengine_api.resource('/users/<int:id>')
# class UsersAPI(Resource):
#     @staticmethod
#     def post(id):
#         from database import db
#         # username = request.json.get('username')
#         # YOu cant use post
#         # token = request.values.get('token')
#         token = request.json.get('token')
#         u = User.query.filter_by(id=id).first()
#         if u is None:
#             tok = str(uuid.uuid4())
#             new_user = User(token=tok)
#             db.session.add(new_user)
#             db.session.commit()
#             return jsonify({'invengine_id': new_user.id, 'token':tok})
#         return jsonify({'invengine_id': id, 'token': str(uuid.uuid4())})



#     @staticmethod
#     def post():
#         #returns token 
#         username = request.json.get('username')
#         token = request.json.get('token')

#         if username is None:
#             user = User(uuid, token= 'wawoiera')
#             return username: new user.name, token token
#         if User.query.filter_by(username=username).first():
#             return a token mothafucka with original username back


# @app.route('/api/users', methods=['POST'])
# def new_user():
#     username = request.json.get('username')
#     password = request.json.get('password')
#     if username is None or password is None:
#         abort(400)    # missing arguments
#     if User.query.filter_by(username=username).first() is not None:
#         abort(400)    # existing user
#     user = User(username=username)
#     user.hash_password(password)
#     db.session.add(user)
#     db.session.commit()
#     return (jsonify({'username': user.username}), 201,
#             {'Location': url_for('get_user', id=user.id, _external=True)})






@invengine_api.resource('/invites/<string:invengine_id>')
class InvitesAPI(Resource):
    @staticmethod
    def post(invengine_id):
        from rq import Queue
        from .worker import conn
        from .tasks import helloTest

        # databass = { 'invengine_id': 'uuidw12322' }
        # data = request.data
        print('*****invengine_id: ', invengine_id)
        print('*****header is: ', request.headers)
        print('*****value is ', request.values)
        print('*****data is', request.data)
        print('******json is', request.json)
        # print('*****method is ', request.method),
        # print('invengine id is : ', invengine_id)
        # if invengine_id in databass['invengine_id']:
        #     return jsonify(invengine_id)
        # else:
        #     # new_user = user(str(uuid.uuid4()))
        #     # db.session.add(new_invengine_id)
        #     new_invengine_id = { 'id': 'xxzonidw12322' }
        #     return jsonify(new_invengine_id.id) 

        # from app import db
        # kitten = Kitten.query.get_or_404(invengine_id)
        # db.session.delete(kitten)
        # db.session.commit()

        # if there are no owner data, then make new one
        # otherwise, if there is owner, then query owner and 
        # add owner into the invite creation argument field

        return jsonify({'id': invengine_id})


# @invengine_api.resource('/kittens/sampledata')
# class KittensAPI(Resource):
#     @staticmethod
#     def get():
#         return contacts


    # @staticmethod
    # def post_invite_history():
    #     from app import db

    #     count = ids.query.count()

    #     if ids not in count

    #     assign new UUID to these invit history

            # if already in count then return the ID back
    #     db.session.add(nUUID)
    #     db.session.commit()
    # outsource the above to a process
    #
    #     return {
    #         'id': new_kitten.id,
    #         'created': new_kitten.created.isoformat() + 'Z'
    #     }
    # return { uuid }




