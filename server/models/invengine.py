# -*- coding: utf-8 -*-
from datetime import datetime
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
# from app import db
from database import db
import uuid



# invite_History = db.Table('invite_history',
#     db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
#     db.Column('invite_id', db.Integer, db.ForeignKey('invite.id')),
#     db.Column('raw', JSON)
# )

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    # username = db.Column(db.string(32), index=True)
    token = db.Column(db.String(150))
    created = db.Column(db.DateTime, default=datetime.utcnow)
    email = db.Column(db.String(150), unique=True)
    contacts = db.Column(JSON)
    invites_history = db.relationship('Invite', backref='user',
                                lazy='dynamic')
    # user basic infos
    # username dayum
    # activities = db.Column(JSON)
    # rawJsons = array of allr esponse json objects

    # def __init__(self, token, email, contacts, invite_history):
    #     self.token= token
    #     self.email = email
    #     self.contacts = contacts
    #     # self.invite_history = invite_history

    def new_token(self):
        return str(uuid.uuid4())

    def validate_token(self, client_token):
        if self.token == client_token:
            return True
        return False

    def __repr__(self):
        return '''<ID: %r, token: %r contacts: %r, 
        invites_history: %r>''' % (self.id, self.token, self.contacts,
          self.invites_history)



class Invite(db.Model):
    __tablename__ = 'invites'

    id = db.Column(db.Integer, unique=True, primary_key=True)
    owner = db.Column(db.Integer, db.ForeignKey('users.id'))
    created = db.Column(db.DateTime, default=datetime.utcnow)
    url = db.Column(db.String(512))
    owner_email = db.Column(db.String(320), unique=True)
    owner_info = db.Column(JSON)
    recipients = db.Column(JSON)
    finished_sending = db.Column(JSON)
    raw = db.Column(JSON) 
    # invite_history_this_belongs_to = db.relationship('HistoryOfInvites', backref='person',
    #                             lazy='dynamic')


    # def __init__(self, url, owner, owner_info, recipients, raw):
    #     self.url = url
    #     self.owner = owner
    #     self.owner_info = owner_info
    #     self.recipients = recipients
    #     self.raw = raw

    # def finished_sending(self):
    #     return true

    def __repr__(self):
        return '<Invite: %r, owner: %r recipients: %r>' % (self.id, self.owner, self.recipients)



# class HistoryOfInvites(db.Model):
#     __tablename__ = 'invites_history'

#     id = db.Column(db.Integer, db.ForeignKey('User.id'))
#     invite_id = db.Column(db.Integer, db.ForeignKey('Invite.id'))
#     raw = db.Column(JSON)

#     def __init__(self, url, sender_info, recipients, position):
#         self.nickname= nickname
#         self.role = role
#         self.email = email

#     def __repr__(self):
#         return '<User %r>' % self.labelname
