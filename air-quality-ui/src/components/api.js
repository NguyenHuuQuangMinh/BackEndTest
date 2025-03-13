export async function fetchAirQuality(city, country) {
    try {
        const url = `http://127.0.0.1:8000/air_quality?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}`;
        console.log("📌 Gửi request tới:", url); // Kiểm tra URL gửi đi

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Không thể lấy dữ liệu từ API");
        }

        const data = await response.json();
        console.log("📌 Dữ liệu nhận được:", data); // Debug kiểm tra phản hồi từ API

        if (!data || data.error) {
            throw new Error(data.error || "Lỗi không xác định từ API");
        }

        return data;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        throw error;
    }
}
