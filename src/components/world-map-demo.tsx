"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full h-full">
        <WorldMap
          dots={[
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 20.5937, lng: 78.9629 }, // India (Center)
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India (Center)
            end: { lat: -33.8688, lng: 151.2093 }, // Australia (Sydney)
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Australia (Sydney)
            end: { lat: 40.7128, lng: -74.0060 }, // New York
          },
          {
            start: { lat: 40.7128, lng: -74.0060 }, // New York
            end: { lat: 34.0522, lng: -118.2437 }, // California (Los Angeles)
          },
          {
            start: { lat: 34.0522, lng: -118.2437 }, // California (Los Angeles)
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
        ]}
        lineColor="#9b111e"
      />
      </div>
    </div>
  );
}
