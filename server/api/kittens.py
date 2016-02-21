# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restful import Api, Resource
from models import Kitten

kittens_api = Api(Blueprint('kittens_api', __name__)) # pylint: disable=invalid-name

@kittens_api.resource('/kittens')
class KittensAPI(Resource):
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

@kittens_api.resource('/kittens/<int:kitten_id>')
class KittenAPI(Resource):
    @staticmethod
    def delete(kitten_id):
        from app import db
        kitten = Kitten.query.get_or_404(kitten_id)
        db.session.delete(kitten)
        db.session.commit()

        return None, 204


# @kittens_api.resource('/kittens/sampledata')
# class KittensAPI(Resource):
#     @staticmethod
#     def get():
#         return contacts



# contacts = [
#   {
#     "key": 1,
#     "individual_id": 121,
#     "first_name": "Louis",
#     "last_name": "Duncan",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/1.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/1.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/2.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/2.jpg"
#       }
#     ],
#     "inviteProbability": 0.87,
#     "sort":1
#   },
#   {
#     "key": 2,
#     "individual_id": 322,
#     "first_name": "Wanda",
#     "last_name": "Austin",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/3.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/3.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/4.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/4.jpg"
#       }
#     ],
#     "inviteProbability": 0.2,
#     "sort":2
#   },
#   {
#     "key": 3,
#     "individual_id": 453,
#     "first_name": "Janice",
#     "last_name": "Chapman",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/5.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/5.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/6.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/6.jpg"
#       }
#     ],
#     "inviteProbability": 0.66,
#     "sort":3
#   },
#   {
#     "key": 4,
#     "individual_id": 124,
#     "first_name": "Andrea",
#     "last_name": "Bennett",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/7.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/7.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/8.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/8.jpg"
#       }
#     ],
#     "inviteProbability": 0.83,
#     "sort":4
#   },
#   {
#     "key": 5,
#     "individual_id": 35,
#     "first_name": "Justin",
#     "last_name": "Flores",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/9.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/9.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/14.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/14.jpg"
#       }
#     ],
#     "inviteProbability": 0.96,
#     "sort":5
#   },
#   {
#     "key": 6,
#     "individual_id": 6,
#     "first_name": "Alan",
#     "last_name": "Webb",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/15.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/15.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/21.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/21.jpg"
#       }
#     ],
#     "inviteProbability": 0.33,
#     "sort":6
#   },
#   {
#     "key": 7,
#     "individual_id": 7212,
#     "first_name": "Teresa",
#     "last_name": "Parker",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/22.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/22.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/23.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/23.jpg"
#       }
#     ],
#     "inviteProbability": 0.32,
#     "sort":7
#   },
#   {
#     "key": 8,
#     "individual_id": 4238,
#     "first_name": "Donna",
#     "last_name": "Medina",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/24.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/24.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/25.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/25.jpg"
#       }
#     ],
#     "inviteProbability": 0.6,
#     "sort":8
#   },
#   {
#     "key": 9,
#     "individual_id": 3239,
#     "first_name": "Juan",
#     "last_name": "Robinson",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/26.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/26.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/27.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/27.jpg"
#       }
#     ],
#     "inviteProbability": 0.55,
#     "sort":9
#   },
#   {
#     "key": 10,
#     "individual_id": 1310,
#     "first_name": "Jacqueline",
#     "last_name": "Kelley",
#     "picture": [
#       {
#         "large": "http://api.randomuser.me/portraits/women/28.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/28.jpg"
#       },
#       {
#         "large": "http://api.randomuser.me/portraits/women/29.jpg",
#         "medium": "http://api.randomuser.me/portraits/med/women/29.jpg"
#       }
#     ],
#     "inviteProbability": 0.46,
#     "sort":10
#   }
# ]