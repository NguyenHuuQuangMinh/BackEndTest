# Sử dụng image chính thức của Python làm base image
FROM python:3.10

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file requirements vào container
COPY requirements.txt .

# Cài đặt các thư viện cần thiết
RUN pip install --no-cache-dir -r requirements.txt

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng cho ứng dụng chạy trên port 8000
EXPOSE 8000

# Chạy ứng dụng FastAPI với Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
