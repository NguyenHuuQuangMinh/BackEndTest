import { useState } from "react";

function CityInput({ onSearch }) {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city, country);
    };

    return (
        <form onSubmit={handleSubmit} className="city-form">
            <h2 className="form-title">Kiểm tra chất lượng không khí</h2>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Nhập thành phố..." 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    className="input-field"
                />
            </div>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Mã quốc gia (VD: VN)" 
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)} 
                    className="input-field"
                />
            </div>

            <button type="submit" className="search-button">Tìm kiếm</button>
        </form>
    );
}

export default CityInput;
