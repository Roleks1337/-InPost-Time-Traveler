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

## 🚀 Future Roadmap: Kierunki Rozwoju
Gdybym miał dodatkowy tydzień na rozwój projektu, priorytetem byłoby przekształcenie go z zadania technicznego w aplikację klasy produkcyjnej:

| Priorytet | Funkcjonalność | Uzasadnienie |
| :--- | :--- | :--- |
| **Wysoki** | **TanStack Query** | Zastąpienie `useState` profesjonalnym cachowaniem i automatycznym odświeżaniem danych w tle. |
| **Wysoki** | **Optymalizacja Mapy** | Implementacja `markercluster` oraz filtrowania po stronie serwera (Bounding Box), aby płynnie obsługiwać tysiące punktów w miastach takich jak Warszawa czy Kraków. |
| **Średni** | **Testy E2E (Playwright)** | Symulacja pełnej ścieżki użytkownika: od wyszukiwania miasta, przez geolokalizację, aż po weryfikację geometrii trasy pieszej. |
| **Średni** | **Rozbudowa Vitest** | Dodanie testów komponentów dla `StatsPanel` i `FilterPanel`, aby zapewnić spójność UI przy zmianach stanów filtrów. |
| **Niski** | **Wsparcie PWA** | Dodanie Service Workera dla trybu offline, umożliwiającego dostęp do ostatnio wyszukiwanych paczkomatów bez połączenia z siecią. |
---

## 🤖 Wykorzystanie Narzędzi AI
W procesie tworzenia projektu wykorzystałem narzędzia AI (Claude, Gemini) jako "mnożnik produktywności", co pozwoliło na przyspieszenie setupu oraz dopracowanie złożonej logiki biznesowej.

### **Obszary wsparcia:**
* **Architektura i Boilerplate:** Szybka konfiguracja nowoczesnego stosu technologicznego (React 19, Vite 8, Tailwind 4) zgodnie z aktualnymi standardami.
* **Logika Algorytmiczna:** Współpraca przy tworzeniu narzędzia `hoursParser`. AI pomogło zidentyfikować brzegowe przypadki formatów czasu w API (np. różnice między `24/7` a `PN-PT 11-20`), co pozwoliło na stworzenie niezawodnego Regexa.
* **Orkiestracja API:** Optymalizacja asynchronicznej logiki pobierania danych z trzech różnych źródeł (InPost, OSRM, Nominatim).
* **Refining UI:** Iteracyjne dopracowanie stylizacji Tailwind 4, w tym efektów *glassmorphism* oraz animacji markerów na mapie.

### **Weryfikacja i kontrola jakości:**
> Kod generowany przez AI nigdy nie był traktowany jako gotowe rozwiązanie. Każdy fragment przeszedł przez mój proces weryfikacji:

1.  **Code Review:** Każda linia kodu została ręcznie sprawdzona pod kątem bezpieczeństwa typów (TypeScript) i poprawności logicznej.
2.  **Optymalizacja Wydajności:** Samodzielnie zaimplementowałem hooki `useMemo` oraz `useCallback` w miejscach, gdzie sugestie AI nie uwzględniały potencjalnych wąskich gardeł renderowania.
3.  **Walidacja Builda:** Regularne testy za pomocą `npm run build` oraz `tsc` zapewniły, że finalny produkt jest wolny od błędów i gotowy do wdrożenia.

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
