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

## ⚙️ Prerequisites & System Requirements
To build and run this solution locally, you will need the following:

Node.js (v18.20.0 or higher): The project utilizes the latest Vite 8 build system, which requires a modern Node.js environment (LTS version recommended).
npm (v10.0.0 or higher): Standard package manager to install and manage the dependencies listed in package.json.
Git: For cloning and version control management.

---

## 🔧 Installation & Setup

1. **Change the directory:**
   ```bash
   cd .\Desktop\
   ```
2. **Clone the repository:**
   ```bash
   git clone [URL]
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run in development mode:**
   ```bash
   npm run dev
   ```
5. **Build the app:**
   ```bash
   npm run build
   ```

---

## 🚀 Future Roadmap: What’s Next?
If I had another week to develop this project, I would prioritize the following improvements to move it from a "Technical Assignment" to a "Production-Ready Application":

Priority,Feature,Description
High,TanStack Query,Replace useState hooks with robust caching and background refetching to minimize redundant API calls.
High,Map Optimization,Implement Leaflet.markercluster and Server-Side Bounding Box filtering to handle high-density areas (Warsaw/Kraków).
Medium,E2E Testing,"Deploy Playwright to simulate full user journeys, specifically verifying route geometry and ""Find Near Me"" flows."
Medium,Component Testing,Expand Vitest coverage for the StatsPanel and FilterPanel to ensure UI state integrity.
Low,PWA Support,"Integrate Service Workers for Offline Mode, allowing users to access cached maps and locker data on the go."

---

## 🤖 Use of Ai Tools

I leveraged AI tools (Claude, Gemini) as a force multiplier to accelerate boilerplate setup and complex logic refinement while maintaining strict architectural oversight.
Implementation Areas

    Architecture: Streamlined the configuration for the React 19 / Vite 8 / Tailwind 4 stack.

    Algorithmic Logic: Co-developed the hoursParser utility. AI helped identify edge-case time formats (e.g., 24/7 vs PN-PT 11-20) to ensure 100% regex accuracy.

    API Orchestration: Refined asynchronous flows for fetching and merging data from InPost, OSRM, and Nominatim.

    UI/UX: Iterated on Tailwind 4 glassmorphism effects and custom pulsing CSS animations for map markers.

The "Human in the Loop" Process

    AI-generated code was never treated as "final." I applied a rigorous verification pipeline:

    Manual Code Review: Every snippet was audited for type-safety and logical alignment with the project’s goals.

    Performance Tuning: I manually refactored AI suggestions with useMemo and useCallback to eliminate rendering bottlenecks and maintain a 60fps experience.

    Build Validation: Consistent use of tsc and npm run build ensured the codebase remained production-grade and error-free.

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
