# -*- coding: utf-8 -*-
from datetime import datetime
from sqlalchemy.dialects.postgresql import JSON
# from app import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)

    # useremail
    # userid
    # activities
    # contacts
    # invengineid
    # created date
    # raw jsons array


class Invite(db.Model):
    __tablename__ = 'invites'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)

    # unique invite id
    # owner/sender, sender/invengineID
    # recipients array
    # medium/url
    # timestamp
    # inviteposition
    # raw json

