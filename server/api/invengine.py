# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from models import User, Invite #import invenine model here
import uuid
from rq import Queue
from worker import conn
from tasks import helloTest, parse_invite_data, send_emails
from database import db


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
        tok = str(uuid.uuid4())
        new_user = User(token=tok)
        db.session.add(new_user)
        db.session.commit()
        print('we adding a new user :', new_user.id)
        return jsonify({'invengine_id': new_user.id, 'token': tok})





@invengine_api.resource('/invites/<string:invengine_id>')
class InvitesAPI(Resource):
    @staticmethod
    def post(invengine_id):

        # q = Queue('low', connection=conn)
        q = Queue('low', connection=conn)
        # j = q.enqueue_call(func=helloTest, args=(3,), timeout=50)

        invites = request.json.get('invites')
        custom_message = request.json.get('custom_message')
        url = request.json.get('url')
        id = request.json.get('id')
        token = request.json.get('token')
        owner_info = request.json.get('owner_info')
        data = request.json

        # databass = { 'invengine_id': 'uuidw12322' }
        # data = request.data
        # print('*****invengine_id: ', invengine_id)
        # print('*****header is: ', request.headers)
        # print('*****value is ', request.values)
        # print('*****data is', request.data)
        # print('xxxxxxxdata is', data['token'])
        print('******json is', request.json)
        job = q.enqueue_call(
            func=parse_invite_data, args=(data,), result_ttl=5000
        )
        return jsonify({'id': invengine_id})



