# Teyvat Character Roulette

A Genshin Impact–themed character randomizer built with React.js and Vite. Spin the wheel to randomly select a character with advanced filtering options!

## Features

- 🎰 Interactive spinning wheel with smooth animations
- 🔍 Advanced filtering by Weapon Type, Element, Nation, and Rarity
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎉 Beautiful popup modal showing selected character
- ⚡ Fast and lightweight built with Vite

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the local development URL (usually `http://localhost:5173`)

### Docker Deployment

#### Using Docker directly:

1. Build the Docker image:
```bash
docker build -t teyvat-roulette .
```

2. Run the container:
```bash
docker run -d -p 3000:80 --name teyvat-roulette teyvat-roulette
```

3. Access the application at `http://localhost:3000`

#### Using Docker Compose:

1. Build and run with Docker Compose:
```bash
docker-compose up -d
```

2. Access the application at `http://localhost:3000`

3. To stop the container:
```bash
docker-compose down
```

## Project Structure

```
├── data/
│   └── list.json          # Character data
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── nginx.conf             # Nginx server configuration
└── package.json           # Project dependencies
```

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Docker** - Containerization
- **Nginx** - Web server for production

## Author

Sonit Bahl
