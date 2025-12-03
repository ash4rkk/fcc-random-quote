# Random Quote Machine

A web application displaying random philosophical quotes with social media sharing capabilities.

## Description

Random Quote Machine is an interactive React application that fetches and displays inspiring quotes from the ZenQuotes API. When the API is unavailable, the application seamlessly falls back to a curated collection of Stoic philosophy quotes.

## Features

- Automatic random quote generation on application load
- One-click quote refresh functionality
- Smooth animated loading states
- Direct sharing to Twitter and Tumblr
- Fallback system with 10 curated Stoic quotes
- Responsive design with elegant visual effects

## Technologies

- **React** - Frontend framework with Hooks (useState, useEffect, useCallback)
- **ZenQuotes API** - Primary quote source
- **Font Awesome** - Icon library for social media buttons
- **CSS3** - Styling with blur and gradient effects

## Installation

```bash
# Clone the repository
git clone https://github.com/ash4rkk/fcc-random-quote.git

# Navigate to project directory
cd fcc-random-quote

# Install dependencies
npm install

# Start development server
npm start
```

## Usage

1. Open the application in your browser
2. A random quote will automatically load
3. Click "New Quote!" to fetch a new quote
4. Use the Twitter or Tumblr icons to share quotes on social media

## How It Works

The application fetches quotes from the ZenQuotes API with built-in error handling. A 3-second loading animation provides visual feedback during API calls. If the API is unreachable, the app automatically uses backup quotes from Marcus Aurelius, Epictetus, and Seneca.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Quotes provided by [ZenQuotes API](https://zenquotes.io/)
- Icons by [Font Awesome](https://fontawesome.com/)
