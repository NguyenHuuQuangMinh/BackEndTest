from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_air_quality_post():
    response = client.post("/air_quality", json={"city": "Hanoi", "country": "VN"})
    assert response.status_code == 200
    assert "aqi" in response.json()
    assert "pollution_level" in response.json()

def test_invalid_city():
    response = client.post("/air_quality", json={"city": "InvalidCity", "country": "VN"})
    assert response.status_code == 200
    assert "error" in response.json()