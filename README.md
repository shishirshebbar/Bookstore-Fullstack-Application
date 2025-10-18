# Bookstore Full Stack Application

## About the Project

This is a full-stack web application for managing and browsing books in an online bookstore. The backend uses MongoDB for storage and exposes a RESTful API; the frontend provides a responsive UI built with modern web tooling.



## Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/shishirshebbar/Bookstore-Fullstack-Application.git

```

## Run Instructions

### 1. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the backend folder with:

```ini
PORT=4001
MONGODB=mongodb://localhost:27017/bookstore
```

Start the backend server:

```bash
npm start
```

The backend will run at: http://localhost:4001

### 2. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
