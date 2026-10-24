"use client";
import { useState } from "react";
import { revenue } from "@/lib/data";

const W = 720, H = 300, L = 46, R = 12, T = 14, B = 30;
const money = (n) => "$" + n.toLocaleString("en-US");

export default function RevenueChart() {
  const [range, setRange] = useState(30);
  const [hover, setHover] = useState(null);
  const d = revenue[range];
  const max = Math.max(...d.values) * 1.1;
  const X = (i) => L + (i * (W - L - R)) / (d.values.length - 1);
  const Y = (v) => T + (1 - v / max) * (H - T - B);
  const pts = d.values.map((v, i) => [X(i), Y(v)]);

  let path = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1], [bx, by] = pts[i], cx = (ax + bx) / 2;
    path += ` C${cx},${ay} ${cx},${by} ${bx},${by}`;
  }
  const area = `${path} L${pts[pts.length - 1][0]},${H - B} L${pts[0][0]},${H - B}Z`;
  const unit = range === 12 ? 1000 : 100;
  const step = Math.ceil(d.labels.length / 7);

  const onMove = (e) => {
    const r = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const i = Math.round((px - L) / ((W - L - R) / (d.values.length - 1)));
    setHover(Math.max(0, Math.min(d.values.length - 1, i)));
  };

  return (
    <div className="card">
      <div className="ch">
        <div><h2>Revenue</h2><p>{d.sub}</p></div>
        <div className="seg">
          {[[7, "7 days"], [30, "30 days"], [12, "12 months"]].map(([v, label]) => (
            <button key={v} className={range === v ? "on" : ""} onClick={() => { setRange(v); setHover(null); }}>{label}</button>
          ))}
        </div>
      </div>
      <div className="chart">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Revenue chart">
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--primary)" stopOpacity=".28" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 0.25, 0.5, 0.75, 1].map((f) => {
            const y = T + f * (H - T - B);
            const val = Math.round((max * (1 - f)) / unit) * unit;
            return (
              <g key={f}>
                <line x1={L} x2={W - R} y1={y} y2={y} stroke="var(--line)" strokeDasharray="3 5" />
                <text x={L - 8} y={y + 4} textAnchor="end" fontSize="11" fill="var(--muted)">{val >= 1000 ? val / 1000 + "k" : val}</text>
              </g>
            );
          })}
          {d.labels.map((t, i) => i % step === 0 && (
            <text key={i} x={X(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="var(--muted)">{range === 30 ? i + 1 : t}</text>
          ))}
          <path d={area} fill="url(#fill)" />
          <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" />
          {hover !== null && (
            <g>
              <line x1={X(hover)} x2={X(hover)} y1={T} y2={H - B} stroke="var(--primary)" strokeOpacity=".4" />
              <circle cx={X(hover)} cy={Y(d.values[hover])} r="5" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2.5" />
            </g>
          )}
          <rect x={L} y={T} width={W - L - R} height={H - T - B} fill="transparent" onMouseMove={onMove} onMouseLeave={() => setHover(null)} />
        </svg>
        {hover !== null && (
          <div className="tip" style={{ left: `${(X(hover) / W) * 100}%`, top: `${(Y(d.values[hover]) / H) * 100}%` }}>
            {d.labels[hover]}<b>{money(d.values[hover])}</b>
          </div>
        )}
      </div>
    </div>
  );
}
