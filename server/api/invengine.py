# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from models import Kitten #import invenine model here
from models import User, Invite #import invenine model here
import uuid


invengine_api = Api(Blueprint('invengine_api', __name__)) # pylint: disable=invalid-name

@invengine_api.resource('/contacts')
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
        from app import db

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

@invengine_api.resource('/invites/<string:invengine_id>')
class InvitesAPI(Resource):
    @staticmethod
    def post(invengine_id):
        # databass = { 'invengine_id': 'uuidw12322' }
        # data = request.data
        print('*****invengine_id: ', invengine_id)
        print('*****header is: ', request.headers)
        print('*****value is ', request.values)
        print('*****data is', request.data)
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


    

