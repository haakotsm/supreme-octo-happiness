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

# Integrating AI Coding Assistants in IntelliJ IDEA and Visual Studio Code

Enhance your development process with AI-powered code suggestions by integrating tools like Codeium and GitHub Copilot into your IDE.

## IntelliJ IDEA Integration

### GitHub Copilot

1. Install the Plugin:

   - Open IntelliJ IDEA.
   - Navigate to File > Settings > Plugins.
   - Search for "GitHub Copilot" in the Marketplace.
   - Click "Install" and restart IntelliJ IDEA to activate the plugin.

2. Authenticate GitHub Account:

   - After installation, you will be prompted to sign in to your GitHub account.
   - Follow the authentication steps to link your GitHub account which has access to GitHub Copilot.

3. Using GitHub Copilot:
   - GitHub Copilot works automatically as you type, suggesting code and completions in the editor.
     Use Alt + Enter (or Option + Enter on macOS) to accept suggestions.

### Codeium

1. Install the Plugin:

   - Open IntelliJ IDEA.
   - Navigate to File > Settings > Plugins.
   - Click on the "Marketplace" tab and search for "Codeium".
   - Find the "Codeium AI Autocomplete and Chat for Python, JS, Java, Go" plugin and click "Install".
   - Restart IntelliJ IDEA to activate the plugin.

2. Using Codeium:

   - Once installed, Codeium will automatically provide AI-driven code completions as you type.
   - Codeium may also provide additional features such as refactoring suggestions and code explanations.

3. Configure Plugin Settings:
   - To adjust how Codeium behaves, go to File > Settings > Tools > Codeium and configure the settings to fit your coding style and needs.

## Visual Studio Code Integration

### GitHub Copilot

1. Install the Extension:

   - Open Visual Studio Code.
   - Go to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X.
   - Search for "GitHub Copilot" and click "Install".

2. Authenticate GitHub Account:

   - Once installed, you’ll need to authenticate with GitHub.
   - Follow the on-screen prompts to sign in to your GitHub account which is subscribed to Copilot.

3. Using GitHub Copilot:
   - Copilot will automatically start offering suggestions as you type in the editor.
   - Press Tab to accept a suggestion.

### Codeium

1. Install the Extension:

   - Open Visual Studio Code.
   - Navigate to the Extensions view (Ctrl+Shift+X).
   - Search for "Codeium" and click "Install".

2. Using Codeium:

   - Once installed, Codeium provides AI-driven code completions as you type.
   - No separate authentication is needed unless specified by Codeium during setup.

3. Configure Settings:
   - You can configure Codeium settings by going to the extension settings in VS Code to adjust its behavior according to your preferences.
