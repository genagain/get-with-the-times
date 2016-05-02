from flask import Flask, render_template, request, redirect, flash
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask.ext.heroku import Heroku
import os

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/petition'
heroku = Heroku(app)
db = SQLAlchemy(app)

class Supporter(db.Model):
  __tablename__ = "supporters"
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(120))
  last_name = db.Column(db.String(120))
  email = db.Column(db.String(120), unique=True)
  zip_code = db.Column(db.String(20))

  def __init__(self, first_name, last_name, email, zip_code):
    self.first_name = first_name
    self.last_name = last_name
    self.email = email
    self.zip_code = zip_code

  def __repr__(self):
    return '<Supporter(email = %s>' % self.email

@app.route('/', methods=['GET'])
def index():
  return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
  if request.method == 'POST':
    first_name = request.form['firstName']
    last_name = request.form['lastName']
    email = request.form['emailAddress']
    zip_code = request.form['zipCode']
    # ipdb.set_trace()
    try:
      supporter = Supporter(first_name, last_name, email, zip_code)
      db.session.add(supporter)
      db.session.commit()
    except:
      flash('Looks like you already signed the petition.')
    return redirect('/thankyou', code=302)


@app.route('/thankyou', methods=['GET'])
def thank_you():
  return render_template('thankyou.html')

if __name__ == '__main__':
    app.secret_key = os.environ['APP_SECRET']
    app.run(debug=True)
