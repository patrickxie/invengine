class data(object):
    def __init__(self):
        self.contacts =[ 
          { "first_name":"Alan",
            "last_name":"Webb", 
            "email":"alanwalker@yahoo.com"},
          { "first_name":"Teresa",
            "last_name":"Parker",
            "email":"teresa@hotmail.com"}
            ]
        self.owner_info = { "first_name":"Aidan",
            "last_name":"christenmorgansen",
            "email": "aidancrist@gmail.com" } 
        self.email = "helloworld@worldhello.com"
        self.custom_message = "hello, this is a custom message made for test"
        self.assistvars = [  
          {  
             "EM":true,
             "FB":false,
             "TW":false,
             "GO":false,
             "RE":false,
             "IN":false,
             "PI":true,
             "key":6,
             "individual_id":6,
             "first_name":"Alan",
             "last_name":"Webb",
             "picture":[  
                {  
                   "large":"http://api.randomuser.me/portraits/women/15.jpg",
                   "medium":"http://api.randomuser.me/portraits/med/women/15.jpg"
                },
                {  
                   "large":"http://api.randomuser.me/portraits/women/21.jpg",
                   "medium":"http://api.randomuser.me/portraits/med/women/21.jpg"
                }
             ],
             "inviteProbability":0.33,
             "sort":6
          },
          {  
             "EM":true,
             "FB":false,
             "TW":false,
             "GO":false,
             "RE":true,
             "IN":false,
             "PI":true,
             "key":7,
             "individual_id":7212,
             "first_name":"Teresa",
             "last_name":"Parker",
             "picture":[  
                {  
                   "large":"http://api.randomuser.me/portraits/women/22.jpg",
                   "medium":"http://api.randomuser.me/portraits/med/women/22.jpg"
                },
                {  
                   "large":"http://api.randomuser.me/portraits/women/23.jpg",
                   "medium":"http://api.randomuser.me/portraits/med/women/23.jpg"
                }
             ],
             "inviteProbability":0.32,
             "sort":7
          },
          {  
             "EM":false,
             "FB":true,
             "TW":false,
             "GO":false,
             "RE":false,
             "IN":false,
             "PI":true,
             "key":8,
             "individual_id":4238,
             "first_name":"Donna",
             "last_name":"Medina",
             "picture":[  
                {  
                   "large":"http://api.randomuser.me/portraits/women/24.jpg",
                   "medium":"http://api.randomuser.me/portraits/med/women/24.jpg"
                },
                {  
                   "large":"http://api.randomuser.me/portraits/women/25.jpg",
                   "medium":"http://api.randomuser.me/portraits/med/women/25.jpg"
                }
             ],
             "inviteProbability":0.6,
             "sort":8
          }
       ]
        self.raw_data = { "id": "zedshen" ,
        "token": "wpoie23jpafpoiwem34269",
        "url": "http://myspace.com",
        "owner_info": self.owner_info,
        "invites": self.assistvars,
        "custom_message": self.custom_message,
        }

a = data()
print a.contacts
print a.custom_message
