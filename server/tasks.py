import time
from database import db
from flask import request
from models import User, Invite
import os
from app import create_app

def helloTest(variable):
    print('der variable is: ', variable)
    return variable

def parse_invite_data(data):
    invites = data.get('invites')
    custom_message = data.get('custom_message')
    url = data.get('url')
    id = data.get('id')
    token = data.get('token')
    owner_info = data.get('owner_info')
    u = {}
    app = create_app()

    with app.app_context():
      u = User.query.filter_by(id=id).first()
    if u.token == token:
        email_invites = [{'email': i['email'], 
        'first_name': i['first_name'], 'last_name' : i['last_name']} for i in invites if i['EM'] == True ]
        sent_emails = send_emails(email_invites, url, custom_message, owner_info)
        inv = Invite(user=u,
                      url= url,
                      owner_email=owner_info[0]['email'][0]['address'],
                      owner_info=owner_info,
                      recipients=invites,
                      finished_sending=sent_emails,
                      raw=data)
        with app.app_context():
            u.email = owner_info[0]['email'][0]['address']
            u.invites_history.append(inv)
            db.session.add(inv)
            db.session.add(u)
            db.session.commit()




def send_emails(email_list, url, custom_message, owner_info):
    import sendgrid
    api_key = os.environ['SENDGRID_KEY']
    sg = sendgrid.SendGridClient(api_key)
    result = []
    if len(email_list) < 17:
      for i in email_list:
          message = sendgrid.Mail()
          message.add_to(i['email'])
          message.set_subject('Hey '+ i['first_name'] + ', checkout ' + url)
          message.set_html(custom_message)
          if not owner_info:
              message.set_from('patrick@invengine.io')
          else:
              message.set_from(owner_info[0]['email'][0]['address'])
          status, msg = sg.send(message)
          if status == 200:
              result.append({'email':i['email'], 'done': True})
          print(status, msg, i['email'])
    return result



def write_contacts_to_db(contacts, user):
    if contacts:
        if user.contacts:
            user.contacts = [user.contacts, contacts]
        else:
            user.contacts = [contacts]
    app = create_app()
    with app.app_context():
        db.session.add(user)
        db.session.commit()


