from app import create_app
from flask.ext.cors import CORS #remove later 

app = create_app()
CORS(app) #remove later
if __name__ == '__main__':
    app.run(debug=True)
