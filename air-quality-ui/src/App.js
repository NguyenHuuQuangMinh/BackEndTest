import { useState } from "react";
import CityInput from "./components/CityInput";
import AirQualityCard from "./components/AirQualityCard";
import { fetchAirQuality } from "./components/api";
import "./App.css"; 

function App() {
    const [airQuality, setAirQuality] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async (city, country) => {
        setError(""); // Xóa lỗi cũ trước khi tìm kiếm
        try {
            const data = await fetchAirQuality(city, country);
            setAirQuality(data); // Cập nhật dữ liệu vào state
        } catch (err) {
            setError(err.message);
            setAirQuality(null);
        }
    };

    return (
        <div className="container">
            <CityInput onSearch={handleSearch} />
            <div className="spacer"></div>
            {error && <div className="error-message">{error}</div>}
            {airQuality && <AirQualityCard data={airQuality} />}
        </div>
    );
}

export default App;