# Interactive Learning Assistance System Web Application

This React.js web application complements a microcontroller-based project designed to help students maintain focus and manage stress through the Pomodoro technique, presence detection, and interactive games.

## 🎯 Project Objective

This project aims to enhance student well-being, productivity, and the overall learning experience by integrating microcontroller technology with structured study intervals, presence detection, and interactive games. The system is built to improve time management and provide refreshing breaks during study sessions.

## 🎯 Key Features

- **Pomodoro Integration**: The application includes a countdown timer for structured study intervals and breaks, promoting better time management and productivity.
  
- **Presence Detection Technology**: The system monitors student engagement and automatically pauses the timer when the student is away, ensuring accurate tracking of study sessions.

- **Interactive Games**: During breaks, the application provides games like a dancing game, buzz wire game, and memory game to offer mental stimulation and physical activity.

- **User-Friendly Web Application**: The application offers personalized feedback, tracks achievements, and facilitates self-assessment, making it easier for students to track their progress and stay motivated.

## 🎮 Web Application Features

- **Dashboard**: A user-friendly dashboard that provides an overview of the system's functionality and access to various features.

- **Session Management**: Allows users to set the desired number of study sessions, which are then sent to the ESP32 via WebSocket.

- **Session Progress Visualization**: The successful session count is visualized using an AreaChart, with data retrieved from Firebase Firestore.

- **Real-Time Gaming Features**: 
  - **Dancing Game**: Displays arrows during the game and sends real-time data through WebSocket. It processes and stores the high score in Firebase Realtime Database.
  - **Mind Game & Buzz Wire Game**: Tracks and stores high scores for these games in the Firebase Realtime Database, with preview features available.

## 📷 Screenshots
Here are some screenshots of the application:
