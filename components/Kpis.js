import Icon from "./Icon";
import { kpis } from "@/lib/data";

function Spark({ data, color }) {
  const w = 96, h = 34, max = Math.max(...data), min = Math.min(...data);
  const pts = data
    .map((y, i) => `${(i * w) / (data.length - 1)},${h - 3 - ((y - min) / (max - min || 1)) * (h - 8)}`)
    .join(" ");
  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <polyline points={pts} fill="none" stroke={`var(--${color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Kpis() {
  return (
    <section className="grid kpis">
      {kpis.map((k) => (
        <div className="card kpi" key={k.label}>
          <div className="lab">
            <span className="ico" style={{ background: `var(--${k.color}-soft)`, color: `var(--${k.color})` }}>
              <Icon name={k.icon} size={16} />
            </span>
            {k.label}
          </div>
          <div className="row">
            <div>
              <div className="num">{k.value}</div>
              <span className={`delta ${k.up ? "" : "dn"}`}>{k.delta} vs last month</span>
            </div>
            <Spark data={k.spark} color={k.color} />
          </div>
        </div>
      ))}
    </section>
  );
}
