import { bestSellers, lowStock } from "@/lib/data";

const swatch = [
  "linear-gradient(140deg,#8FA2DE,#3C4F8A)",
  "linear-gradient(140deg,#9FD0C6,#3F8277)",
  "linear-gradient(140deg,#E6C98F,#B98B3E)",
  "linear-gradient(140deg,#E0A3AE,#A8505F)",
];

export default function Products() {
  return (
    <div className="grid" style={{ alignContent: "start" }}>
      <div className="card">
        <div className="ch"><h2>Best sellers</h2></div>
        <div className="list">
          {bestSellers.map((p, i) => (
            <div className="item" key={p.name}>
              <div className="thumb" style={{ background: swatch[i] }} />
              <div className="g"><b>{p.name}</b><small>{p.note}</small></div>
              <div className="r"><b>{p.price}</b></div>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="ch"><div><h2>Running low</h2><p>Reorder before these sell out</p></div></div>
        <div className="list">
          {lowStock.map((p, i) => (
            <div className="item" key={p.name}>
              <div className="thumb" style={{ background: swatch[3 - i] }} />
              <div className="g"><b>{p.name}</b><small>{p.left} left</small></div>
              <div className="r"><div className="stock"><i style={{ width: `${p.left * 5}%` }} /></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
