// "use client";
// import {
//   useState,
//   useMemo,
//   ForwardRefExoticComponent,
//   RefAttributes,
// } from "react";
// import { mockWeather, mockLocations } from "@/app/data/index";
// import {
//   Cloud,
//   Map,
//   Home as Homed,
//   Search,
//   Globe,
//   CalendarDays,
//   X,
//   LucideProps,
// } from "lucide-react";

// // Button component for accessibility and consistent styling
// const NavButton = ({
//   title,
//   icon: Icon,
//   active,
//   onClick,
// }: {
//   title: string;
//   icon: ForwardRefExoticComponent<
//     Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
//   >;
//   active?: boolean;
//   onClick: () => void;
// }) => (
//   <button
//     onClick={onClick}
//     aria-current={active ? "page" : undefined}
//     className={`
//       flex items-center space-x-2 p-3 rounded-xl transition-all duration-200
//       font-medium text-sm md:text-base whitespace-nowrap
//       ${
//         active
//           ? "bg-indigo-700 text-white shadow-lg"
//           : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
//       }
//       focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
//     `}
//     style={{ minWidth: "100px", justifyContent: "center" }}
//   >
//     <Icon className="w-5 h-5" aria-hidden="true" />
//     <span>{title}</span>
//   </button>
// );

// // Card component for data display
// const Card = ({
//   title,
//   children,
//   className = "",
// }: {
//   title: string;
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <div
//     className={`p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 ${className}`}
//   >
//     <h3 className="text-xl font-semibold text-indigo-400 mb-4 border-b border-gray-700 pb-2">
//       {title}
//     </h3>
//     {children}
//   </div>
// );

// // --- Page Components ---

// const HomePage = () => (
//   <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
//     <Globe className="w-24 h-24 text-indigo-400 mb-6 animate-pulse" />
//     <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
//       Geosight Explorer
//     </h1>
//     <p className="text-lg text-gray-300 max-w-2xl mb-8">
//       Your digital portal to global geography, real-time (mock) weather, and
//       fascinating world locations. Navigate using the bar above to begin your
//       exploration.
//     </p>
//     <div className="flex space-x-4">
//       <NavButton
//         title="View Weather"
//         icon={Cloud}
//         onClick={() => {
//           if (typeof document !== "undefined") {
//             (
//               document.querySelector(
//                 ".main-nav button:nth-child(3)"
//               ) as HTMLButtonElement | null
//             )?.click();
//           }
//         }}
//       />
//       <NavButton
//         title="Explore Globe"
//         icon={Map}
//         onClick={() => {
//           if (typeof document !== "undefined") {
//             (
//               document.querySelector(
//                 ".main-nav button:nth-child(3)"
//               ) as HTMLButtonElement | null
//             )?.click();
//           }
//         }}
//       />
//     </div>
//   </div>
// );

// const WeatherPage = () => {
//   const [searchTerm, setSearchTerm] = useState("New York City");
//   const [currentWeather, setCurrentWeather] = useState(mockWeather.current);
//   const [forecast] = useState(mockWeather.forecast);

//   // Simple mock search functionality
//   const handleSearch = () => {
//     // In a real app, this would call a weather API.
//     // Here, we just "update" the city name and keep the mock data for demonstration.
//     setCurrentWeather((prev) => ({
//       ...prev,
//       city: searchTerm || "Global Average",
//     }));
//     console.log(`Searching for weather in: ${searchTerm}`);
//   };

//   const CurrentIcon = currentWeather.icon;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
//         <CalendarDays className="inline w-7 h-7 mr-2 text-indigo-400" />{" "}
//         Real-Time Weather (Mock Data)
//       </h1>

//       {/* Search Bar */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter city name..."
//           aria-label="Search for city weather"
//           className="flex-grow p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition"
//         />
//         <button
//           onClick={handleSearch}
//           className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition focus:outline-none focus:ring-4 focus:ring-indigo-500"
//         >
//           <Search className="inline w-5 h-5 mr-2" /> Search
//         </button>
//       </div>

//       {/* Current Weather Card */}
//       <Card
//         title={`Current Conditions in ${currentWeather.city}`}
//         className="mb-8"
//       >
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center space-x-6">
//             <CurrentIcon className="w-20 h-20 text-indigo-400" />
//             <div>
//               <p className="text-6xl font-extrabold text-white">
//                 {currentWeather.temp}°C
//               </p>
//               <p className="text-2xl text-gray-300 mt-1">
//                 {currentWeather.condition}
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0">
//             {currentWeather.details.map((detail, index) => {
//               const DetailIcon = detail.icon;
//               return (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-2 text-gray-400"
//                 >
//                   <DetailIcon className="w-5 h-5 text-indigo-400" />
//                   <div>
//                     <span className="font-semibold text-white block">
//                       {detail.value}
//                     </span>
//                     <span className="text-sm">{detail.label}</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </Card>

//       {/* 5-Day Forecast */}
//       <Card title="5-Day Forecast">
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
//           {forecast.map((day, index) => {
//             const DayIcon = day.icon;
//             return (
//               <div
//                 key={index}
//                 className="text-center p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition duration-300 border border-gray-600 shadow-md"
//               >
//                 <p className="text-lg font-bold text-white mb-2">{day.day}</p>
//                 <DayIcon className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
//                 <p className="text-3xl font-semibold text-white">{day.temp}°</p>
//                 <p className="text-sm text-gray-400">{day.condition}</p>
//               </div>
//             );
//           })}
//         </div>
//       </Card>
//     </div>
//   );
// };

// const LocationPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState(mockLocations);

//   const handleSearch = () => {
//     if (searchTerm === "") {
//       setSearchResults(mockLocations);
//     } else {
//       const filtered = mockLocations.filter((loc) =>
//         loc.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setSearchResults(filtered);
//     }
//   };

//   const handleClear = () => {
//     setSearchTerm("");
//     setSearchResults(mockLocations);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
//         <Globe className="inline w-7 h-7 mr-2 text-indigo-400" /> Global
//         Geographic View
//       </h1>

//       {/* Map Placeholder */}
//       <Card
//         title="Interactive Map View Placeholder"
//         className="mb-8 p-0 overflow-hidden"
//       >
//         <div className="w-full h-80 bg-gray-700 flex items-center justify-center relative">
//           {/* Mock World Map SVG/Image */}
//           <svg
//             viewBox="0 0 100 100"
//             className="w-full h-full opacity-30 text-indigo-400"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <path
//               fill="currentColor"
//               d="M 50 5 C 20 5 5 35 5 50 C 5 65 20 95 50 95 C 80 95 95 65 95 50 C 95 35 80 5 50 5 Z M 50 15 L 75 25 L 70 35 L 50 40 L 30 35 L 25 25 Z M 50 50 L 60 70 L 50 85 L 40 70 Z M 30 70 L 40 50 L 40 60 Z M 60 50 L 70 70 L 60 80 Z"
//             />
//           </svg>
//           <div className="absolute text-white text-3xl font-bold">
//             World Map Visualization
//           </div>
//         </div>
//         <div className="p-6 text-gray-400">
//           <p>
//             This space typically hosts an interactive map (e.g., Leaflet or
//             Mapbox). For this single-file deployment, it serves as a geographic
//             visualization placeholder.
//           </p>
//         </div>
//       </Card>

//       {/* Location Search and List */}
//       <Card title="Search & Explore Key Locations">
//         <div className="flex flex-col sm:flex-row gap-4 mb-6">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             placeholder="Search for mountains, rivers, or landmarks..."
//             aria-label="Search geographic locations"
//             className="flex-grow p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 transition"
//           />
//           <div className="flex gap-3">
//             <button
//               onClick={handleSearch}
//               className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition focus:outline-none focus:ring-4 focus:ring-indigo-500"
//             >
//               <Search className="inline w-5 h-5" />
//             </button>
//             <button
//               onClick={handleClear}
//               aria-label="Clear search"
//               className="p-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-500 transition focus:outline-none focus:ring-4 focus:ring-gray-400"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {searchResults.length > 0 ? (
//             searchResults.map((loc, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-600 transition"
//                 role="listitem"
//               >
//                 <h4 className="text-xl font-semibold text-white">{loc.name}</h4>
//                 <p className="text-gray-400 text-sm mt-1">
//                   <Map className="inline w-4 h-4 mr-1 text-indigo-400" />{" "}
//                   Coordinates: {loc.coordinates}
//                 </p>
//                 {(loc.elevation || loc.length || loc.area || loc.size) && (
//                   <p className="text-gray-300 text-sm mt-1">
//                     <Globe className="inline w-4 h-4 mr-1 text-indigo-400" />{" "}
//                     Fact: {loc.elevation || loc.length || loc.area || loc.size}
//                   </p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-400 p-8 border border-dashed border-gray-600 rounded-xl">
//               No locations found matching your search. Try searching for
//               &quot;Fuji&quot;.
//             </p>
//           )}
//         </div>
//       </Card>
//     </div>
//   );
// };

// // --- Main Application Component ---

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = useMemo(() => {
//     switch (currentPage) {
//       case "Weather":
//         return <WeatherPage />;
//       case "Location":
//         return <LocationPage />;
//       case "Home":
//       default:
//         return <HomePage />;
//     }
//   }, [currentPage]);

//   // Define navigation items
//   const navItems = [
//     { name: "Home", icon: Homed, page: "Home" },
//     { name: "Weather", icon: Cloud, page: "Weather" },
//     { name: "Global View", icon: Map, page: "Location" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 font-sans text-white">
//       {/* Header/Navigation */}
//       <header className="bg-gray-800 shadow-xl sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-2 mb-4 md:mb-0">
//               <Globe className="w-8 h-8 text-indigo-400" />
//               <span className="text-2xl font-extrabold text-white">
//                 Geosight
//               </span>
//             </div>

//             {/* Navigation Buttons (main-nav class for homepage shortcuts) */}
//             <nav className="main-nav flex justify-center space-x-2 sm:space-x-4 p-2 bg-gray-700 rounded-2xl shadow-inner w-full md:w-auto overflow-x-auto">
//               {navItems.map((item) => (
//                 <NavButton
//                   key={item.page}
//                   title={item.name}
//                   icon={item.icon}
//                   active={currentPage === item.page}
//                   onClick={() => setCurrentPage(item.page)}
//                 />
//               ))}
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-100px)]">
//         {renderPage}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 mt-12 py-6 border-t border-indigo-900/50">
//         <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
//           <p>
//             &copy; {new Date().getFullYear()} Geosight Explorer | Responsive &
//             Accessible UI Demo The Environment variable --{" "}
//             {process.env.NEXT_PUBLIC_HOST_URL}
//           </p>
//           <p className="mt-1">
//             <span className="text-indigo-400">Note:</span> Data shown is mock
//             data for demonstration purposes only..
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };
// export { HomePage, WeatherPage, LocationPage };
// export default App;
import React from 'react'
// app/__tests__/FailDemo.test.tsx
// test("This test should fail", () => {
//   expect(1 + 1).toBe(3); // ❌ WRONG ON PURPOSE
// });

const Page = () => {
  return (
    <div>
      Hello
    </div>
  )
}

export default Page
