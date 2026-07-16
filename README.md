# NeuroFive Week 1 Health-Check API

A small Node.js and Express backend API created for the NeuroFive Solutions Backend Development Internship Week 1 task 1.

## Purpose

The purpose of this project is to demonstrate:

- Node.js and Express environment setup
- Basic backend project organization
- Git and GitHub version control
- API development
- Public deployment

## Technology Used

- Node.js
- Express.js
- Nodemon
- Git and GitHub
- Vercel

## Project Structure

```text
src/
├── app.js
└── server.js
```

## API Endpoints

### Home

```http
GET /
```

Example response:

```json
{
  "message": "NeuroFive Week 1 API is running"
}
```

### Health Check

```http
GET /health
```

Example response:

```json
{
  "status": "ok",
  "timestamp": "2026-07-16T00:00:00.000Z"
}
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/Suhail-Ahmed7/neurofive-week1-health-api
```

Enter the project folder:

```bash
cd neurofive-week1-health-api
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

The API will run locally at:

```text
http://localhost:3000
```

## Live API

* [Home API](https://neurofive-week1-health-e13fkjfey-suhai-ahmeds-projects.vercel.app)

* [Health Endpoint](https://neurofive-week1-health-e13fkjfey-suhai-ahmeds-projects.vercel.app/health)

## Author

Suhail Ahmed  
Backend Development Intern — NeuroFive Solutions
