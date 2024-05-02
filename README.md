# Weather Dashboard

## Overview

This is a simple React application that displays weather information for a user-specified location. The application will retrieve data from a mock API, and developers need to implement the UI and utility functions based on the failing test suite you provide.

## Resources provided

- Basic project skeleton including a reactive setup.
- Failing test suite provided.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository.
2. Install dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm start` or `yarn start`.
4. Open your browser and navigate to `http://localhost:3000`.
5. Implement the features listed in the [Features to Implement](#features-to-implement) section.
6. Run the tests by running `npm test` or `yarn test`. All tests should go green.

## Features to Implement

- [ ] Location Input: Implement a text input field where the user can enter a city name.
- [ ] Weather Display: Implement the display of current weather information:
  - [ ] Temperature (Celsius/Fahrenheit)
  - [ ] Weather conditions (Sunny, Cloudy, Rainy, etc.)
  - [ ] Optional: Wind speed, humidity, and pressure readings
- [ ] Data Fetching: Implement a mock function that simulates API calls to fetch weather data based on the user's input.
- [ ] Responsive Design: Ensure the app is responsive and works well on both desktop and mobile views.

## Test Suites

- UI Tests:
  - [ ] Test if the input field and submit button render correctly.
  - [ ] Test if weather data displays correctly after submitting a location.
  - [ ] Test for error handling, such as displaying a message if the location is not found.
- Utility Function Tests:
  - [ ] Function to parse the mock API data and extract necessary weather details.
  - [ ] Function to convert temperature between Celsius and Fahrenheit.
  - [ ] Optional: Function to calculate real-feel temperature based on wind speed and humidity.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
