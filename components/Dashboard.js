"use client";
import { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Kpis from "./Kpis";
import RevenueChart from "./RevenueChart";
import Categories from "./Categories";
import OrdersTable from "./OrdersTable";
import Products from "./Products";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Overview");
  const [toast, setToast] = useState("");
  const timer = useRef();

  const notify = (msg) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 1800);
  };

  return (
    <div className="app">
      <Sidebar open={open} active={active} onSelect={(l) => { setActive(l); setOpen(false); }} />
      <main>
        <Topbar onMenu={() => setOpen((o) => !o)} onAdd={() => notify("Product form opened")} />
        <Kpis />
        <section className="grid mid">
          <RevenueChart />
          <Categories />
        </section>
        <section className="grid low">
          <OrdersTable />
          <Products />
        </section>
      </main>
      <div className={`toast ${toast ? "show" : ""}`} role="status">{toast}</div>
    </div>
  );
}
