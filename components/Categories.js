import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <div className="card">
      <div className="ch"><div><h2>Sales by category</h2><p>Share of this month’s revenue</p></div></div>
      <div className="cats">
        {categories.map((c) => (
          <div className="cat" key={c.name}>
            <div className="t"><span>{c.name}</span><span>{c.pct}%</span></div>
            <div className="b"><i style={{ width: `${c.pct * 2.4}%`, background: `var(--${c.color})` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
