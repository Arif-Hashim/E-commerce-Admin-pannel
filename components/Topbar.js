"use client";
import { useEffect } from "react";
import Icon from "./Icon";

export default function Topbar({ onMenu, onAdd }) {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <header className="top">
      <button className="ib menu" onClick={onMenu} aria-label="Open menu"><Icon name="menu" /></button>
      <div>
        <h1>Good morning, Amara</h1>
        <p>Here’s how your store is doing today.</p>
      </div>
      <div className="sp" />
      <label className="search">
        <Icon name="search" />
        <input placeholder="Search orders, products, customers" aria-label="Search" />
      </label>
      <button className="ib" onClick={toggleTheme} aria-label="Toggle theme"><Icon name="moon" /></button>
      <button className="ib" aria-label="Notifications"><Icon name="bell" /><span className="dot" /></button>
      <button className="btn" onClick={onAdd}>Add product</button>
      <div className="me">
        <div className="av">AK</div>
        <div><b>Amara Khan</b><small>Store owner</small></div>
      </div>
    </header>
  );
}
