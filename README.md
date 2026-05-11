# 📦 InPost Time-Traveler & Accessibility Suite

### **Software Development Internship — Technical Assignment 2026**

**Live Demo:** WIP

---

## 📝 Author

Wiktor Wójcik (Roleks1337) – Candidate for Software Development Internship at InPost Technology (2026).

    "I believe that great software is built at the intersection of data accuracy and user empathy. This project is my take on making logistics infrastructure more transparent and accessible for everyone."

## 🚀 Project Overview

**InPost Time-Traveler** is a high-performance, interactive dashboard designed to explore the InPost parcel locker network. Beyond a simple map, this tool solves a critical real-world user problem: **"Will this locker actually be accessible by the time I get there?"**.
By analyzing data from the **InPost Global Points API** in real-time, the application provides deep insights into locker availability, architectural barriers, and network infrastructure distribution.

### **Core Features:**
* **🕰️ Time-Traveler (Dynamic Time Slider):** A custom filtering engine that updates the map in real-time. It allows users to check locker availability at any chosen hour (e.g., verifying if a locker inside a shopping mall is open at 11:00 PM).
* **♿ Accessibility First:** Dedicated filters for the `easy_access_zone`, highlighting points designed for seniors and people with disabilities.
* **📍 Smart Routing & Geolocation:** The "Find nearest from my location" feature doesn't just find the closest point—it integrates with the **OSRM API** to calculate precise walking routes, real-world distances, and estimated walking times.
* **📊 Live Insights Dashboard:** A real-time statistics panel showing the health of the loaded network (operational status, "InPost Next" generation lockers, and availability percentages for the selected time).
* **🔍 Advanced Marker Logic:** A visual system that distinguishes between open points, closed points (yellow markers), and points that are currently out of service (red markers).

**Live Demo:** WIP

---

## 🛠️ Tech Stack

* **Frontend:** React 19 with TypeScript (Vite 8)
* **Styling:** Tailwind CSS 4 (Custom Dark Theme with full `@theme` integration)
* **Mapping:** React Leaflet / Leaflet.js
* **Data Management:** Custom Hooks & State – advanced orchestration of asynchronous API requests.
* **Routing & Location:** OSRM API (Foot paths) & Nominatim (Reverse geocoding for the auto-load feature during map movement).
* **Testing:** Vitest & React Testing Library.

---

⚙️ Prerequisites & System Requirements
To build and run this solution locally, you will need the following:

Node.js (v18.20.0 or higher): The project utilizes the latest Vite 8 build system, which requires a modern Node.js environment (LTS version recommended).
npm (v10.0.0 or higher): Standard package manager to install and manage the dependencies listed in package.json.
Git: For cloning and version control management.

---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [URL]
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run in development mode:**
  ```bash
   npm run dev
  ```
4. **Run in development mode:**
  ```bash
   npm run build
  ```
---

🚀 Future Roadmap: What’s Next?
If I had another week to develop this project, I would prioritize the following improvements to move it from a "Technical Assignment" to a "Production-Ready Application":

1. Integration of TanStack Query (Priority: High)
Why: Currently, I’m using custom hooks with useState. While functional, TanStack Query would provide robust caching, automatic background refetching, and better error handling. It would significantly reduce API calls when the user switches back and forth between the same cities.
2. Advanced Map Optimization (Priority: High)
Marker Clustering: In very dense areas like Warsaw or Krakow, hundreds of individual markers can clutter the map. I would implement Leaflet.markercluster to group points at lower zoom levels, improving both performance and readability.
Server-Side Filtering: Instead of fetching all points for a city, I would implement a bounding-box query to only load lockers currently visible on the user's viewport.
3. Expanded Testing Suite (Priority: Medium)
E2E Testing: I would add Playwright tests to simulate the end-to-end user journey: from searching a city to clicking "Find Near Me" and verifying the route geometry.
Component Testing: Add Vitest tests for the StatsPanel and FilterPanel to ensure UI state changes correctly reflect the filtered data.
4. PWA Support (Priority: Low)
Offline Mode: By adding a Service Worker, I could enable offline access to previously searched cities and basic map tiles, which is a great feature for users on the go with unstable connections.

---

🤖 Use of AI Tools
I utilized Antigravity (Claude, Gemini) to accelerate the development process and enhance the technical depth of the project. Here is how it was integrated:

Architecture & Boilerplate: AI helped in quickly setting up the modern stack (React 19, Vite 8, and Tailwind CSS 4), ensuring all configurations were aligned with current industry standards.
Complex Algorithmic Logic: The hoursParser utility, which uses advanced Regular Expressions to handle inconsistent API data, was co-developed with AI. It helped in identifying edge cases in time formats (like 24h vs 24/7 or shorthand 11-20).
API Orchestration: AI assisted in writing the asynchronous logic for fetching data from multiple sources (InPost, OSRM, and Nominatim), ensuring proper error handling and state management.
UI/UX Refinement: I used AI to quickly iterate on the Tailwind CSS 4 styling, especially for complex components like the pulsing map markers and the glassmorphism effects in the sidebar.

How I verified and adapted the output:
Code Review: Every line of code generated or suggested by the AI was manually reviewed for type-safety and logical correctness.
Manual Testing: I performed extensive manual testing of the routing logic and time-filtering to ensure the "Time-Traveler" engine accurately reflected the API data.
Performance Tuning: I adjusted the AI's initial suggestions to include useMemo and useCallback hooks where I identified potential rendering bottlenecks, ensuring a smooth 60fps experience.
Build Validation: I consistently used npm run build and tsc to verify that the AI-assisted code was production-ready and free of TypeScript errors.

---

## 🧠 Technical Decisions & Challenges

### **1. Data Performance**
To handle large numbers of markers, I implemented **Memoization (`useMemo`)** and **Debouncing** for requests (especially for reverse geocoding). This ensures a smooth UI experience even during rapid map panning.

### **2. Robust Time Parsing**
The InPost API returns opening hours in various formats (e.g., "24/7", "PN-PT 11-20"). I developed a custom parser using **Regular Expressions (Regex)** to standardize this data for the Time-Traveler engine.

### **3. Real-Time Foot Distance**
Instead of simple "as the crow flies" calculations, the app communicates with an external routing engine to provide users with the actual walking distance they need to cover, significantly enhancing the utility of the "Find nearest from my location" feature.

---

Quick FAQ for Recruiters

    Why the Dark Mode? I chose a modern Dark Theme utilizing InPost's signature Yellow and Black palette to give it a "Pro Tool" feel.

    Is it mobile-friendly? Yes, the sidebar and map are responsive to ensure usability on the go.

    What about testing? I included unit tests for the hoursParser utility (check src/utils/hoursParser.test.ts) to ensure the core logic is bulletproof.

---
