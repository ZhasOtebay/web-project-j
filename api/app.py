from flask import Flask, request, jsonify
from models import db, User, ParkingSpot, Reservation
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

@app.route('/reserve', methods=['POST'])
def reserve():
    data = request.get_json()
    new_reservation = Reservation(spot_id=data['spot_id'])  # Убираем user_id
    db.session.add(new_reservation)
    db.session.commit()
    return {"msg": "Reservation created"}, 201

@app.route('/spots', methods=['GET'])
def get_parking_spots():
    spots = ParkingSpot.query.all()
    return {"spots": [{"id": spot.id, "location": spot.location, "is_reserved": spot.is_reserved} for spot in spots]}, 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Создание таблиц при старте приложения
    app.run(debug=True)

