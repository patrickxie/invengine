import time
from database import db
from flask import request
from models import User, Invite
import os
from app import create_app


# def helloTest(variable):
#     time.sleep(2)
#     return variable

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
    # user_test_1 = User(email='foo@bar.com',
    #                           token='aopfwpieaprjoea',
    #                           contacts=[12,3,4,214,22])
    u = {}
    app = create_app()

    with app.app_context():
      # db.session.add(user_test_1)
      # db.session.commit()
      u = User.query.filter_by(id=id).first()
    if u.token == token:
        email_invites = [{'email': i['email'], 
        'first_name': i['first_name'], 'last_name' : i['last_name']} for i in invites if i['EM'] == True ]
        send_emails(email_invites, url, custom_message, owner_info)


def send_emails(email_list, url, custom_message, owner_info):
    import sendgrid
    api_key = os.environ['SENDGRID_KEY']
    sg = sendgrid.SendGridClient(api_key)
    print('email list is: ', email_list)
    for i in email_list:
      message = sendgrid.Mail()
      message.add_to(i['email'])
      message.set_subject('Hey '+ i['first_name'] + 'checkout ' + url)
      message.set_html(custom_message)
      # message.set_text('Body')
      # the below won't work if there is no owner info
      # if not owner_info:
      #     message.set_from('')
      message.set_from(owner_info[0]['email'][0]['address'])
      status, msg = sg.send(message)
      print(status, msg, i['email'])

def write_to_db(data):
    pass

def format_and_save_contacts():
    pass