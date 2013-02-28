import os
from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route('/')
def hello():
    return redirect(url_for('static', filename='homepage.html'))

# Assignment 1: A haphazard page showing the most common HTML tags
@app.route('/assignment1')
def assignment_1():
    return redirect(url_for('static', filename='assignment1.html'))
# Assignment 3: A haphazard page showing the most common HTML tags
@app.route('/assignment3')
def assignment_3():
    return redirect(url_for('static', filename='assignment3.html'))

@app.route('/assignment4')
def assignment4():
    return redirect(url_for('static', filename='assignment4.html'))

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
