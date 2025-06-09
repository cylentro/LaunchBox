# LaunchBox & Nait - An Interactive Portfolio

Welcome to my interactive portfolio, a project designed to showcase my work, skills, and passion for technology in a more engaging way. This repository contains two main components:

1. **LaunchBox** : The frontend of my portfolio, built with VitePress. It's a static site that houses all the content about my professional experience, projects, and tech stacks.
2. **Nait** : The AI assistant that powers the conversational experience on the site. It's a backend service built with Next.js and integrated with the Google Gemini API to answer questions about me based on the portfolio's content.

## 🚀 Key Features

* **Modern Static Site** : A clean and fast portfolio website built with VitePress and styled with Tailwind CSS.
* **Conversational AI Assistant (Nait)** : Ask questions and get answers about my career, projects, and skills. Nait is designed to be a helpful guide to the portfolio.
* **Retrieval-Augmented Generation (RAG)** : Nait uses a RAG architecture to ensure its answers are grounded in the actual content of this portfolio, preventing it from making things up.
* **Detailed Content** : Features a comprehensive resume, project showcase, AI experiments, and a list of my favorite tech stacks.

## 🛠️ Tech Stack

### Frontend (LaunchBox)

* Framework : **VitePress**
* Language : **Vue 3**
* Styling : **Tailwind CSS**

### Backend (Nait)

* Framework : **Next.js**
* Language : **TypeScript**
* AI/LLM : **Google Gemini**
* Orchestration : **LangChain.js**

## 📂 Project Structure

The repository is organized into two main directories:

```
.
├── backend/      # Contains the Next.js application for the Nait AI assistant
└── frontend/     # Contains the VitePress portfolio website (LaunchBox)

```

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later recommended)
* npm

### Installation & Setup

1. Clone the repository:
   ```
   git clone https://github.com/cylentro/LaunchBox.git
   cd your-repo-name

   ```
2. Set up the Backend (Nait):
   * Navigate to the backend directory.
     ```
     cd backend

     ```
   * Install the dependencies.
     ```
     npm install

     ```
   * Create a `.env.local` file in the `backend` directory and add your Google Gemini API key. The API uses this environment variable.
     ```
     GEMINI_API_KEY=YOUR_API_KEY_HERE

     ```
   * Start the backend development server (runs on `http://localhost:3000`).
     ```
     npm run dev

     ```
3. Set up the Frontend (LaunchBox):
   * In a new terminal, navigate to the frontend directory.
     ```
     cd frontend

     ```
   * Install the dependencies.
     ```
     npm install

     ```
   * Start the frontend development server (runs on `http://localhost:5173`). The command is `vitepress dev docs`.
     ```
     npm run docs:dev

     ```
4. Explore!
   * Open your browser and go to `http://localhost:5173` to see the portfolio website.
   * The Nait AI assistant on the site will now be able to communicate with your local backend running on `http://localhost:3000`.
