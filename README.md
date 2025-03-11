## Problem-solving challenge: Farmer

<img src="./imgs/farmer_image.jpg"/>

Mục tiêu là đưa ra một giải pháp toàn diện cho phép nông dân dự đoán năng suất cây trồng và có được những hiểu biết có thể hành động được. Giải pháp này phải tiết kiệm chi phí hoặc miễn phí, cho phép dễ dàng dự đoán năng suất trong quá khứ hoặc tương lai.

**End User** là nông dân.

## Hiểu đề + Hướng giải quyết
- Dữ liệu thầy cung cấp bao gồm các independent features là nông dân và nhiệt độ, và dependent feature là năng suất cây trồng. Mỗi nông dân có hiệu suất lao động khác nhau, làm việc tại các vùng khác nhau, điều kiện thời tiết cũng khác nhau, dẫn đến ảnh hưởng năng suất cây trồng.

- Dựa vào bộ dữ liệu trên, em sẽ xây dựng mô hình hồi quy regression, giúp dự đoán năng suất cây trồng trong tương lai cho mỗi người nông dân khác nhau và với nhiệt độ vùng khác nhau.

- Với end-user là nông dân, em sẽ xây dựng một giao diện cơ bản, chỉ cần những người nông dân nhập input (thông tin farmer, các thông tin về temperature) là có thể dự đoán được năng suất cây trồng.

## Điểm chưa hiểu trong đề (hạn chế cá nhân)
- Ở mục Hint (Gợi ý), thầy có bảo những người nông dân có thể cung cấp vị trí (kinh độ và vĩ độ). Em chưa hiểu Hint này có tác động gì đến problem trên.

## Getting Started
1. Clone repository.
```
git clone https://github.com/tvtp11052002/Farmer-Challenge.git
```
2. Change Directory
```
cd Farmer-Challenge
```  
4. Run App (Use Tkinter Interface)
```
python main.py
```

## Data

Em sử dụng thư viện ProfileReport để tạo 1 Report mô tả chi tiết về dữ liệu.

Chi tiết tại file [farmer.html](https://github.com/tvtp11052002/Farmer-Challenge/blob/master/farmer.html) (download to view)

## Model
Em sử dụng 2 model cho bài toán là Random Forest Regression & Gradient Boosting Regression. Thông số sử dụng để đánh giá mô hình là RMSE và R-Squared
### Random Forest Regresion
>Root Mean Squared Error (RMSE): 5.5509500357953625

>R-squared (R2): 0.9855622830127228

Actual vs Predicted Crop Yield

<img src="./imgs/result_rf.png"/>

### Gradient Boosting Regresion
>Root Mean Squared Error (RMSE): 5.683464391306491

>R-squared (R2): 0.984864729938393

Actual vs Predicted Crop Yield

<img src="./imgs/result_gb.png"/>

=> Kết quả 2 mô hình không quá chênh lệch. Các bước tiếp theo sẽ sử dụng Random Forest Model

## Predicted Result
Kiểm thử với thông số như ảnh

<img src="./imgs/prediction_box.jpg"/> 

Kết quả

<img src="./imgs/predicted_yield.jpg"/>
