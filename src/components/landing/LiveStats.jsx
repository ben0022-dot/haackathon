"use client";

import { useEffect, useState } from "react";
import Stats from "./Stats";

export default function LiveStats({
  items = [
    { value: 0, suffix: "", label: "Skilled graduates" },
    { value: 0, suffix: "", label: "Open gigs" },
    { value: 0, suffix: "", label: "Employers hiring" },
    { value: 0, suffix: "", label: "Applications sent" },
  ],
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/stats", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (!cancelled && json) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const resolved = data
    ? [
        { value: data.graduates ?? 0, suffix: "", label: "Skilled graduates" },
        { value: data.opportunities ?? 0, suffix: "", label: "Open gigs" },
        { value: data.employers ?? 0, suffix: "", label: "Employers hiring" },
        { value: data.applications ?? 0, suffix: "", label: "Applications sent" },
      ]
    : items;

  return <Stats items={resolved} />;
}