# ProdOpt AI

### Production Line Optimization and Bottleneck Analysis System

ProdOpt AI is an Industrial Engineering and AI-based software project designed to analyze production lines, identify bottlenecks, measure production performance, and eventually recommend optimization strategies.

The project combines a modern React frontend with a Python FastAPI backend and MongoDB database.

> 🚧 **Current Status:** Active Development  
> The React frontend is currently connected successfully to the FastAPI backend, and MongoDB integration is being developed.

---

## Project Objective

The main objective of ProdOpt AI is to provide a digital system for production-line analysis.

Instead of manually calculating production metrics, users will be able to:

- Create production lines
- Add workstations
- Enter cycle times and worker information
- Calculate takt time
- Identify production bottlenecks
- Calculate production capacity
- Measure workstation utilization
- Calculate line efficiency
- Analyze idle time
- Simulate optimization strategies
- Compare before/after production performance
- Get recommendations from an AI Production Engineer

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Recharts
- Lucide React

## Backend

- Python
- FastAPI
- Uvicorn

## Database

- MongoDB

## Development

- Git
- GitHub
- VS Code
- npm
- Python Virtual Environment

---

# Project Structure

```text
ProdOpt-AI/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   ├── mock/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── app.py
│   ├── .env
│   └── ...
│
├── .gitignore
└── README.md
```
