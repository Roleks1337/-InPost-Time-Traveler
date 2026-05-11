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

## 🚀 Future Roadmap: What's Next?
If granted another week for development, I would prioritize the following improvements to transition this project from a "Technical Assignment" to a "Production-Ready Application":

| Priority | Feature | Description |
| :--- | :--- | :--- |
| **High** | **TanStack Query** | Transition from `useState` to robust caching, automatic background refetching, and optimized error handling to minimize redundant API calls. |
| **High** | **Advanced Map Optimization** | Implement `Leaflet.markercluster` and **Server-Side Bounding Box filtering** to ensure smooth performance in high-density areas like Warsaw or Kraków. |
| **Medium** | **E2E Testing (Playwright)** | Add end-to-end tests to simulate the full user journey: from searching a city to verifying real-world route geometry and walking times. |
| **Medium** | **Component Testing** | Expand **Vitest** coverage for the `StatsPanel` and `FilterPanel` to ensure UI state changes accurately reflect filtered data. |
| **Low** | **PWA Support** | Integrate Service Workers to enable **Offline Mode**, allowing users to access cached maps and locker data on the go with unstable connections. |

---

## 🤖 Usage of AI Tools
I utilized AI tools (Claude, Gemini) as a **productivity multiplier** to accelerate boilerplate setup and refine complex business logic while maintaining strict architectural oversight.

### **Core Integration Areas:**
* **Architecture & Boilerplate:** Streamlined the configuration of the modern **React 19 / Vite 8 / Tailwind 4** stack according to current industry best practices.
* **Complex Algorithmic Logic:** Co-developed the `hoursParser` utility. AI helped identify edge cases in the InPost API's time formats (e.g., `24/7` vs `PN-PT 11-20`), ensuring a bulletproof RegEx implementation.
* **API Orchestration:** Optimized asynchronous logic for fetching and merging data from multiple sources (InPost, OSRM, and Nominatim) with robust error handling.
* **UI/UX Refinement:** Iteratively improved **Tailwind 4** styling, focusing on glassmorphism effects and custom pulsing CSS animations for map markers.

### **Verification & Quality Control:**
> AI-generated suggestions were never accepted blindly. I applied a rigorous "Human-in-the-loop" verification pipeline:

1.  **Manual Code Review:** Every line was audited for **Type-safety (TypeScript)** and logical correctness to ensure it met project requirements.
2.  **Performance Tuning:** I manually refactored components using `useMemo` and `useCallback` where AI suggestions overlooked potential rendering bottlenecks.
3.  **Build Validation:** Consistent use of `npm run build` and `tsc` verified that the final codebase is production-grade and error-free.

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
