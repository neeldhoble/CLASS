import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />
      <main className="px-6 md:px-16">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
