import Icon from "./Icon";
import { nav } from "@/lib/data";

export default function Sidebar({ open, active, onSelect }) {
  return (
    <aside className={`side ${open ? "open" : ""}`}>
      <div className="brand">
        <div className="logo">H</div>
        <div><b>Hollis &amp; Row</b><small>Home goods store</small></div>
      </div>
      <nav>
        {nav.map((g) => (
          <div key={g.group} className="navgroup">
            <h4>{g.group}</h4>
            {g.items.map((it) => (
              <button key={it.label} className={active === it.label ? "on" : ""} onClick={() => onSelect(it.label)}>
                <Icon name={it.icon} />
                {it.label}
                {it.count && <span className="cnt">{it.count}</span>}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="health">
        <p>Store health</p>
        <small>86% of orders shipped on time</small>
        <div className="bar"><i /></div>
      </div>
    </aside>
  );
}
