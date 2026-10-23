# ⭐️ Flexbox Dojo

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

An interactive web application built to learn, review, and visualize CSS Flexbox properties in real-time.

[Explore the Docs](#-features) · [Report Bug](https://github.com/Siriusana/flexbox-dojo/issues) · [Request Feature](https://github.com/Siriusana/flexbox-dojo/issues)

---

## The Project

**Flexbox Dojo** was created out of the need to practice, remember, and visually experiment with CSS Flexbox layouts. 

In this application, you can modify container properties, adjust individual item settings, add or remove elements, and instantly inspect how layout behaviors change across endless Flexbox combinations.

---

## Features

### 🎛️ General Container Properties
* **`justify-content`**: Align items along the main axis.
* **`align-items`**: Align items along the cross axis.
* **`align-content`**: Distribute container lines when wrapping occurs.
* **`flex-direction`**: Change the main axis direction (`row`, `column`, etc.).
* **`gap`**: Adjust the spacing between flex items.

### Item Properties & Dynamics
* **`align-self` (Individual)**: Select a specific item to apply custom `align-self` rules.
* **Item Quantity**: Add or remove items dynamically to see `flex-wrap` behavior in action.

### Live Code Preview
* **Real-time CSS**: Generates code based on your live selections.
* **Toggle Visibility**: Easily hide or show the code block.
* **Reset Button**: Restore all properties to their default values with a single click.

---

## Tech Stack

* **[React](https://react.dev/)**: Core library for UI development.
* **React Hooks (`useState`)**: State management for dynamic Flexbox values.
* **[Lucide React](https://lucide.dev/)**: Clean icon suite (`Sparkles`, `RotateCcw`, `Plus`, `Minus`).
* **CSS-in-JS (Inline Styles)**: Applies reactive styles based on active state.
* **Google Fonts**: Custom typography using *"Lobster Two"* and *"Quicksand"*.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Siriusana/flexbox-dojo.git](https://github.com/Siriusana/flexbox-dojo.git)

2. **Navigate to the project**
   ```bash
   cd flexbox-dojo

3. **Install Dependencies**
   ```bash
   npm install

4. **Start**
   ```bash
   npm run dev

 The app will automatically run at http://localhost:5173 (or similar).
