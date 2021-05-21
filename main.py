from flask import *

app=Flask(__name__)


@app.route("/")
def firstpage():
	return render_template("index.html")

@app.route("/aboutus")
def aboutus():
	return render_template("aboutus.html")

@app.route("/<string:dirname>/<string:filename>/")
def index(dirname,filename="index"):
	return render_template("{0}/{1}.html".format(dirname,filename))

if __name__== "__main__":
	app.run(debug=True)
