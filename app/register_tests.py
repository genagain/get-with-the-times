import unittest
from register import app, db, Supporter

class RegisterTestCase(unittest.TestCase):

  def setUp(self):
    app.config['TESTING'] = True
    db.session.close()
    db.drop_all()
    db.create_all()

  def test_lookup(self):
    first_name = 'Bob'
    last_name = 'Jones'
    email = 'bob.jones@gmail.com'
    zip_code = '02445'
    supporter = Supporter(first_name, last_name, email, zip_code)
    db.session.add(supporter)
    db.session.commit()
    supporters = Supporter.query.all()
    assert supporter in supporters

if __name__ == '__main__':
  unittest.main()
