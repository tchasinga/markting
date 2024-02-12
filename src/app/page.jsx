import Image from "next/image";
import './globals.css'
import Navbars from "./Components/Navbars/Navbars";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <main className="app">
      <Navbars />
      <Hero />
    </main>
  );
}
