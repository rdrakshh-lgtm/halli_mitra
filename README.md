# 🌾 Halli Mitra – Smart Agriculture Management System

Halli Mitra is an AI-powered agriculture management platform built using **FastAPI**, **MySQL**, and **Google Gemini AI**. It helps farmers manage crops, receive weather updates, detect plant diseases, access government schemes, buy and sell agricultural products, and get AI-powered farming assistance.

---

## 🚀 Features

### 👤 User Management
- User Registration
- Secure Login with JWT Authentication
- Profile Management

### 👨‍🌾 Farmer Management
- Add Farmer
- View Farmers
- Update Farmer Details
- Delete Farmer

### 🌱 Crop Management
- Add Crop
- View Crop Details
- Update Crop Information
- Delete Crop

### 🌦 Weather Information
- Live Weather Updates
- Temperature
- Humidity
- Weather Conditions

### 🤖 AI Farming Assistant
- Ask Agriculture-related Questions
- Crop Recommendations
- Fertilizer Suggestions
- Farming Guidance

### 🦠 Plant Disease Detection
- Upload Crop Image
- AI-Based Disease Detection
- Disease Description
- Recommended Treatment

### 🛒 Marketplace
- Buy Agricultural Products
- Sell Agricultural Products
- Manage Marketplace Listings

### 📢 Government Schemes
- View Available Government Schemes
- Scheme Details
- Eligibility Information

### 🔔 Notifications
- Create Notifications
- View Notifications
- Delete Notifications

### 📊 Dashboard
- Total Users
- Total Farmers
- Total Crops
- Marketplace Statistics
- Government Scheme Statistics

### 📁 File Upload
- Upload Crop Images
- Image Storage Support

---

# 🛠 Tech Stack

## Backend
- FastAPI
- Python 3

## Database
- MySQL
- SQLAlchemy ORM

## Authentication
- JWT Authentication
- OAuth2 Password Flow

## AI Services
- Google Gemini AI

## Weather API
- OpenWeatherMap API

## File Handling
- python-multipart

## API Documentation
- Swagger UI
- ReDoc

---

# 📂 Project Structure

```
halli_mitra/
│
├── app/
│   ├── core/
│   ├── crud/
│   ├── database/
│   ├── models/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   └── main.py
│
├── uploads/
├── .gitignore
├── requirements.txt
├── run.py
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/rdrakshh-lgtm/halli_mitra.git
```

```bash
cd halli_mitra
```

---

## Create Virtual Environment

Windows

```bash
python -m venv .venv
```

Activate

```bash
.venv\Scripts\activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL=mysql+pymysql://username:password@localhost/halli_mitra

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30

GEMINI_API_KEY=your_google_gemini_api_key

WEATHER_API_KEY=your_openweathermap_api_key
```

---

## Run the Application

```bash
python -m uvicorn app.main:app --reload
```

Server

```
http://127.0.0.1:8000
```

---

# 📚 API Documentation

Swagger UI

```
http://127.0.0.1:8000/docs
```

ReDoc

```
http://127.0.0.1:8000/redoc
```

---

# 📡 Available API Modules

- Authentication
- Users
- Farmers
- Crops
- Weather
- Marketplace
- Government Schemes
- Notifications
- Dashboard
- AI Chatbot
- Disease Detection
- File Upload

---

# 🔐 Security

- JWT Authentication
- Password Hashing
- Protected Routes
- Environment Variables
- SQLAlchemy ORM
- Input Validation using Pydantic

---

# 🚧 Future Enhancements

- React Frontend
- Mobile Application
- Crop Price Prediction
- Yield Prediction
- Fertilizer Recommendation
- Soil Health Analysis
- SMS Notifications
- Voice Assistant
- Multi-language Support
- Admin Dashboard
- Cloud Deployment

---

# 📸 Screenshots

Screenshots will be added after frontend development.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 👨‍💻 Developer

**Rakshh R D**

Software Engineering Student

GitHub:
https://github.com/rdrakshh-lgtm

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.
