"use client";
import { useState } from "react";
import { orders } from "@/lib/data";

const pill = { Paid: "p-ok", Shipped: "p-ship", Pending: "p-wait", Refunded: "p-bad" };
const tones = ["primary", "teal", "gold", "rose"];

export default function OrdersTable() {
  const [filter, setFilter] = useState("all");
  const rows = orders.filter((o) => filter === "all" || o.status === filter);

  return (
    <div className="card">
      <div className="ch">
        <h2>Recent orders</h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filter orders">
          <option value="all">All statuses</option>
          {Object.keys(pill).map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="tw">
        <table>
          <thead><tr><th>Order</th><th>Customer</th><th>Date</th><th>Total</th><th>Status</th></tr></thead>
          <tbody>
            {rows.length === 0 && <tr><td colSpan="5">No orders with this status yet.</td></tr>}
            {rows.map((o, i) => {
              const tone = tones[i % 4];
              return (
                <tr key={o.id}>
                  <td><b>{o.id}</b></td>
                  <td>
                    <div className="cust">
                      <i style={{ background: `var(--${tone}-soft)`, color: `var(--${tone})` }}>
                        {o.customer.split(" ").map((w) => w[0]).join("")}
                      </i>
                      {o.customer}
                    </div>
                  </td>
                  <td>{o.date}</td>
                  <td>{o.total}</td>
                  <td><span className={`pill ${pill[o.status]}`}>{o.status}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
