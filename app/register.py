from flask import Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy

#from .registration_form import RegistrationForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/petition'
db = SQLAlchemy(app)

class Supporter(db.Model):
  __table__name = "supporter"
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
    return '<E-mail %r>' % self.email

@app.route('/', methods=['GET'])
def index():
  return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
#    form = RegistrationForm(request.form)
    #if request.method == 'POST' and form.validate():
      
    return render_template('register.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
