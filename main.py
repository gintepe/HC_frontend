from flask import Flask, render_template
from temp_data import hr_data
app = Flask(__name__)
app.debug = True


@app.route('/')
def home():
    for i, person in enumerate(hr_data):
        hr_data[i]['img_url'] = "https://imgur.com/IFYVIH4.png"
    return render_template('video.html', people=hr_data[:1])

if __name__ == "__main__":
    app.run()