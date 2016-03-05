from wtforms import Form, BooleanField, TextField, PasswordField, validators

class RegistrationForm(Form):
    first_name = TextField('First Name', [validators.Length(min=2, max=25)])
    last_name = TextField('Last Name', [validators.Length(min=4, max=35)])
    email = TextField('Email', [validators.Email()])
    zip_code = TextField('Zip Code', [validators.Length(min=4, max=35)])
    accept_tos = BooleanField('I accept the TOS', [validators.Required()])

