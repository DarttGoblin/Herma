Herma – Relationship Insights Platform

Herma is an interactive web application that predicts relationship stability through an AI-powered assessment. The frontend delivers a smooth user experience with responsive design, interactive navigation, and dynamic content.

✨ Features

Responsive navigation with mobile support

Assessment interface with 54 structured statements

AI-driven chatbot style question flow

Results section with prediction visualization

Multi-language support (English, Français, العربية)

Informative sections: Home, Herma, About, Benefits, Use Cases, Footer

📂 Project Structure

Herma.css – global styling

Herma.Styles/ – modular CSS (Nav, Home, Herma, About, Footer)

Herma.Media/ – images and illustrations

Herma.Scripts/ – JavaScript for dynamic sections

Herma.js – main script entry point

index.html – main landing page

🚀 Usage

Open index.html in a browser. For full functionality, run it with the backend server (see backend README).

📘 README for Herma Flask Server
Herma – Flask Server

This is the backend API for Herma, serving predictions from a trained machine learning pipeline (Herma.pkl).

⚙️ Features

Loads the trained ML model (Herma.pkl)

Accepts user responses via POST request

Returns prediction (marriage stability true/false) and probability distribution

CORS enabled for frontend integration