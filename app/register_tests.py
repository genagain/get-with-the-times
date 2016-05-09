import unittest
import os
from register import app, db, Supporter

class RegisterTestCase(unittest.TestCase):

  def setUp(self):
    app.config['TESTING'] = True
    app.config['DEBUG'] = True
    app.secret_key = os.environ['APP_SECRET']
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/petition_test'
    db.session.close()
    db.drop_all()
    db.create_all()
    self.app = app.test_client()

  def register(self, first_name, last_name, email, zip_code):
    return self.app.post('/register', data=dict(
      firstName = first_name,
      lastName = last_name,
      emailAddress = email,
      zipCode = zip_code
    ), follow_redirects=True)


  def test_lookup(self):
    first_name = 'Bob'
    last_name = 'Jones'
    email = 'bob.jones@gmail.com'
    zip_code = '02445'
    rv = self.register(first_name, last_name, email, zip_code)
    assert "Thank you for your support!" in rv.data.decode('utf-8')
    lookup = Supporter.query.filter_by(email = 'bob.jones@gmail.com').all()
    bob = lookup[0]
    assert len(lookup) == 1
    assert bob.first_name == first_name
    assert bob.last_name == last_name
    assert bob.first_name == first_name
    assert bob.email == email
    assert bob.zip_code == zip_code

  def test_duplicate(self):
    first_name = 'Bob'
    last_name = 'Jones'
    email = 'bob.jones@gmail.com'
    zip_code = '02445'
    supporter = Supporter(first_name, last_name, email, zip_code)
    db.session.add(supporter)
    db.session.commit()
    rv = self.register(first_name, last_name, email, zip_code)
  #   import ipdb
  #   ipdb.set_trace()
    assert "Looks like you already signed the petition." in rv.data.decode('utf-8')

if __name__ == '__main__':
  unittest.main()
