from flask import Flask, render_template, request
from .registration_form import RegistrationForm

app = Flask(__name__)

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm(request.form)
    #if request.method == 'POST' and form.validate():
    return render_template('register.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
