from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/calendar')
def calendar():
    return render_template('calendar.html')

@app.route('/api/events', methods=['GET'])
def get_events():
    # Пример событий
    events = [
        {"id": 1, "title": "Событие 1", "start": "2024-09-21"},
        {"id": 2, "title": "Событие 2", "start": "2024-09-22"},
    ]
    return jsonify(events)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

