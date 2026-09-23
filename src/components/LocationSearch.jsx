"use client";

import { useEffect, useRef } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

let mapsPromise = null;

function loadMaps() {
  if (!API_KEY) return Promise.resolve(null);
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.google?.maps) return Promise.resolve(window.google);

  if (!mapsPromise) {
    mapsPromise = new Promise((resolve, reject) => {
      window.__spacemakersMapsLoaded = () => resolve(window.google);
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=__spacemakersMapsLoaded`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        mapsPromise = null;
        reject(new Error("Google Maps failed to load."));
      };
      document.head.appendChild(script);
    });
  }
  return mapsPromise;
}

export default function LocationSearch({ value, onChange, placeholder, autoCompleteProps = {} }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!inputRef.current) return;
    loadMaps()
      .then((google) => {
        if (!google || !inputRef.current) return;
        return google.maps.importLibrary("places").then(() => google);
      })
      .then((google) => {
        if (!google || !inputRef.current) return;
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          types: ["geocode"],
          componentRestrictions: { country: "KE" },
          fields: ["formatted_address", "name"],
        });
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const address = place?.formatted_address || place?.name;
          if (address && onChange) onChange(address);
        });
      })
      .catch((err) => {
        console.warn("LocationSearch:", err.message || err);
      });
  }, [onChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      autoComplete="off"
      {...autoCompleteProps}
    />
  );
}