from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


# Home route
@app.route('/')
def home():
    return render_template('index.html')  # Ensure index.html exists in the templates folder


# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Example login logic
        username = request.form.get('username')
        password = request.form.get('password')

        # Replace this with your actual validation logic
        if username == "admin" and password == "password":
            return redirect(url_for('home'))  # Redirect to home page on success
        else:
            error_message = "Invalid credentials"
            return render_template('login.html', error=error_message)  # Render login page with error message

    return render_template('login.html')  # Render login page for GET requests


# Error route for demonstration
@app.route('/error')
def error():
    return render_template('404.html')  # Ensure 404.html exists in the templates folder


# Contact route
@app.route('/contact')
def contact():
    return render_template('contact.html')  # Ensure contact.html exists in the templates folder


# Custom 404 error handler
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
