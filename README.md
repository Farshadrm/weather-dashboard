#  Weather Dashboard App

A modern and responsive weather dashboard built with React + TypeScript. It displays current weather data, historical monthly averages, and 14-day forecasts for selected cities.

---

##  Getting Started

1. **Clone the repository & install dependencies**:
   ```bash
   git clone https://github.com/Farshad-rm/weather-dashboard.git
   cd weather-dashboard
   npm install
   ```

2. **Create a `.env` file** in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

---

##  Features

- **Login Page**: Enter your name to access the dashboard.
- **Dashboard Panel**:
  - **Current Weather**: Shows the current temperature, conditions, date, and time for the selected city.
  - **Monthly Average Chart**: Displays average temperatures over previous months (static or API-based).
  - **Forecast Cards**: Displays a 14-day weather forecast.
  - **City Selector**: Dropdown to choose the city for which data is displayed.
  - **Theme Toggle**: Switch between light and dark mode.
  - **Language Switcher**: Toggle between English and Persian.
  - **Logout Button**: Return to the login page.

---

## Technologies Used

-  React + TypeScript
-  Tailwind CSS
-  i18next (internationalization)
-  Axios (for API calls)
-  Chart.js (for temperature chart)
-  OpenWeatherMap API
-  Light/Dark Mode Support

---

## Notes

- You need an active internet connection to fetch real-time weather data.
- Get a free API key from [OpenWeatherMap](https://openweathermap.org/api) to make requests.

---

## Author

Made by Farshad-Rm