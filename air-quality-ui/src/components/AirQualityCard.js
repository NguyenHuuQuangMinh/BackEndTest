// src/components/AirQualityCard.js
import React from "react";
import "./AirQualityCard.css"; // Chứa CSS

function getAQIColor(aqi) {
    if (aqi <= 50) return "green";
    if (aqi <= 100) return "orange";
    if (aqi <= 150) return "yellow";
    if (aqi <= 200) return "red";
    if (aqi <= 300) return "purple";
    return "maroon";
}

function getAQIEmoji(aqi) {
    if (aqi <= 50) return "😊"; // Good
    if (aqi <= 100) return "😐"; // Moderate
    if (aqi <= 150) return "😷"; // Unhealthy for sensitive groups
    if (aqi <= 200) return "🤢"; // Unhealthy
    if (aqi <= 300) return "☠️"; // Very Unhealthy
    return "💀"; // Hazardous
}

function AirQualityCard({ data }) {
    const colorClass = getAQIColor(data.aqi);
    return (
        <div className="card" data-aqi={colorClass}>
            <h2>{data.city} <span className="emoji">{getAQIEmoji(data.aqi)}</span></h2>
            <p><strong>AQI:</strong> {data.aqi}</p>
            <p><strong>PM2.5:</strong> {data.pm2_5} µg/m³</p>
            <p><strong>PM10:</strong> {data.pm10} µg/m³</p>
            <p><strong>Đánh giá:</strong> {data.pollution_level}</p>
            <p><strong>Lời khuyên:</strong> {data.recommendation}</p>
        </div>
    );
}

export default AirQualityCard;
