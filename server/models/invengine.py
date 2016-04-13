# -*- coding: utf-8 -*-
from datetime import datetime
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
from database import db
import uuid

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    token = db.Column(db.String(150))
    created = db.Column(db.DateTime, default=datetime.utcnow)
    email = db.Column(db.String(150), unique=True)
    contacts = db.Column(JSON)
    invites_history = db.relationship('Invite', backref='user',
                                lazy='dynamic')

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

    def __repr__(self):
        return '<Invite: %r, owner: %r recipients: %r>' % (self.id, self.owner, self.recipients)
