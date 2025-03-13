from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cho phép tất cả các domain gọi API
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "9ca5cad9af99e9754de314568b42b673"

# 🔹 Hàm phân loại AQI
def classify_aqi(aqi):
    if aqi <= 50:
        return "Good", "Air quality is good. No precautions needed."
    elif aqi <= 100:
        return "Moderate", "Limit outdoor activities if you are sensitive."
    elif aqi <= 150:
        return "Unhealthy for sensitive groups", "People with respiratory issues should reduce outdoor activities."
    elif aqi <= 200:
        return "Unhealthy", "Avoid prolonged outdoor activities."
    elif aqi <= 300:
        return "Very Unhealthy", "Wear a mask when going outside."
    else:
        return "Hazardous", "Stay indoors and close windows."

# 🔹 API lấy dữ liệu chất lượng không khí
def get_air_quality(city: str, country: str):
    geo_url = f"http://api.openweathermap.org/geo/1.0/direct?q={city},{country}&limit=1&appid={API_KEY}"
    geo_response = requests.get(geo_url)

    if geo_response.status_code != 200 or not geo_response.json():
        return {"error": "Invalid city or country code."}

    location = geo_response.json()[0]
    lat, lon = location["lat"], location["lon"]

    air_quality_url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_KEY}"
    response = requests.get(air_quality_url)

    if response.status_code != 200:
        return {"error": "Failed to fetch air quality data."}

    data = response.json()["list"][0]
    aqi = data["main"]["aqi"] * 50
    pm2_5 = data["components"]["pm2_5"]
    pm10 = data["components"]["pm10"]

    pollution_level, recommendation = classify_aqi(aqi)

    return {
        "city": city,
        "aqi": aqi,
        "pm2_5": pm2_5,
        "pm10": pm10,
        "pollution_level": pollution_level,
        "recommendation": recommendation
    }

@app.get("/air_quality")  
def air_quality_get(city: str, country: str):
    return get_air_quality(city, country)
