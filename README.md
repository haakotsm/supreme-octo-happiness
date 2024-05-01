# Weather Dashboard

## Overview

This is a simple React application that displays weather information for a user-specified location. The application will retrieve data from a mock API (you could provide a simple JSON file with data for this hackathon), and developers need to implement the UI and utility functions based on the failing test suite you provide.

## Features to Implement

- Location Input: A text input field where the user can enter a city name.
- Weather Display: Show the current weather information:
  - Temperature (Celsius/Fahrenheit)
  - Weather conditions (Sunny, Cloudy, Rainy, etc.)
  - Optional: Wind speed, humidity, and pressure readings
- Data Fetching: A mock function that simulates API calls to fetch weather data based on the user's input.
- Responsive Design: Ensure the app is responsive and works well on both desktop and mobile views.

## Test Suites

- UI Tests:
  - Test if the input field and submit button render correctly.
  - Test if weather data displays correctly after submitting a location.
  - Test for error handling, such as displaying a message if the location is not found.
- Utility Function Tests:
  - Function to parse the mock API data and extract necessary weather details.
  - Function to convert temperature between Celsius and Fahrenheit.
  - Optional: Function to calculate real-feel temperature based on wind speed and humidity.

## Resources to Provide

- Basic project skeleton including a reactive setup.
- Mock API data (in JSON format)
- Pre-written failing test cases using a JavaScript testing framework like Jest.
- Note: You may need to install additional dependencies such as "@testing-library/react" for testing React components.
