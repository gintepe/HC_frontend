from flask import Flask, render_template
import shapiro
import tak
import cameron
from statistics import mean
app = Flask(__name__)
app.debug = True



@app.route('/')
def home():

    return render_template('video.html', people=shapiro.hr_data, yid=shapiro.hr_data[0]['video'])
@app.route('/tak')
def take():
    hr = tak.hr_data[0]['hr']
    return render_template('video.html', people=tak.hr_data, yid=tak.hr_data[0]['video'], max=round(max(hr)), min=round(min(hr)), average=round(mean(hr)) )

@app.route('/cam')
def cam():
    hr = cameron.hr_data[0]['hr']
    return render_template('video.html', people=cameron.hr_data, yid=cameron.hr_data[0]['video'] + "", max=round(max(hr)), min=round(min(hr)), average=round(mean(hr)) )

if __name__ == "__main__":
    app.run()