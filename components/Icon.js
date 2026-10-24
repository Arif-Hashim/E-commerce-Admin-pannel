const PATHS = {
  home: "M3 11l9-8 9 8M5 10v10h14V10",
  bag: "M5 8h14l-1 12H6L5 8zM9 8a3 3 0 016 0",
  box: "M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8",
  users: "M9 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 20c.5-4 3-6 6.5-6s6 2 6.5 6M16 4.5a3.5 3.5 0 010 7M18 14c2 .6 3.3 2.5 3.5 6",
  tag: "M3 12V4h8l10 10-8 8L3 12zM8 9.5a.5.5 0 100-1 .5.5 0 000 1z",
  chart: "M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6",
  gear: "M12 15a3 3 0 100-6 3 3 0 000 6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
  bell: "M6 17V11a6 6 0 0112 0v6l2 2H4l2-2zM10 21h4",
  moon: "M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z",
  menu: "M4 7h16M4 12h16M4 17h16",
  cash: "M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zM12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  pct: "M19 5L5 19M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17 19.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
};

export default function Icon({ name, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
