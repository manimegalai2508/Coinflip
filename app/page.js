"use client";
import Coinflip from "../components/Coinflip";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Coinflip
      </h1>
      <div className="flex flex-col items-center mb-8">
        <video 
          src="/Coinflip-rotate.mp4" 
          autoPlay 
          loop 
          muted 
          width={300} 
          height={300} 
          style={{ animation: "spin 20s linear infinite" }} 
        />
      </div>
      <Coinflip />
    </main>
  );
}
