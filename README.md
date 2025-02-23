# Calculator MVVM App Arimple

A simple calculator application built with [Tauri](https://tauri.app/) that supports the four basic arithmetic operations: addition, subtraction, multiplication, and division.

The main purpose of this is to register a MVVM model in desktop development related to web development. Only for learning purposes to check an idea of how that model would look in this very simple example.

## Features
- Perform addition, subtraction, multiplication, and division.
- Lightweight and fast.
- Cross-platform support (Windows, macOS, Linux) using Tauri.

## Technologies Used
- **Tauri** - for building the desktop application.
- **JavaScript/TypeScript** - for the frontend interface.
- **HTML & CSS** - for the UI design.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Rust & Cargo](https://www.rust-lang.org/)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/calculator-tauri.git
   cd calculator-tauri
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm run tauri dev
   ```

## Building the App
To build the application for production:
```sh
npm run tauri build
```

## License
This project is licensed under the MIT License.
