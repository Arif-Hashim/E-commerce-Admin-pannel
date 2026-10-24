export const kpis = [
  { label: "Revenue", value: "$48,260", delta: "+12.4%", up: true, icon: "cash", color: "primary", spark: [4, 6, 5, 8, 7, 10, 9, 12] },
  { label: "Orders", value: "1,284", delta: "+8.1%", up: true, icon: "bag", color: "teal", spark: [6, 5, 7, 6, 9, 8, 10, 11] },
  { label: "Avg. order value", value: "$37.58", delta: "+3.2%", up: true, icon: "pct", color: "gold", spark: [7, 8, 7, 9, 8, 9, 10, 10] },
  { label: "Return rate", value: "2.9%", delta: "+0.4%", up: false, icon: "box", color: "rose", spark: [5, 4, 5, 6, 5, 7, 6, 7] },
];

export const revenue = {
  7: { sub: "Total for the last 7 days", labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], values: [1420, 1810, 1590, 2210, 2480, 3120, 2760] },
  30: {
    sub: "Total for the last 30 days",
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    values: [980, 1120, 1040, 1390, 1250, 1610, 1480, 1320, 1560, 1780, 1650, 1490, 1830, 2010, 1920, 1740, 1980, 2210, 2090, 1860, 2150, 2380, 2260, 2040, 2410, 2630, 2520, 2290, 2710, 2860],
  },
  12: { sub: "Total for the last 12 months", labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], values: [31200, 44800, 26100, 27900, 30400, 33800, 36200, 35100, 38900, 41300, 44700, 48260] },
};

export const categories = [
  { name: "Living room", pct: 38, color: "primary" },
  { name: "Kitchen & dining", pct: 27, color: "teal" },
  { name: "Bedding", pct: 19, color: "gold" },
  { name: "Lighting", pct: 11, color: "rose" },
  { name: "Outdoor", pct: 5, color: "muted" },
];

export const orders = [
  { id: "#10482", customer: "Maya Ortiz", date: "Oct 24", total: "$214.00", status: "Paid" },
  { id: "#10481", customer: "Daniel Weiss", date: "Oct 24", total: "$89.50", status: "Shipped" },
  { id: "#10480", customer: "Priya Nair", date: "Oct 23", total: "$342.80", status: "Pending" },
  { id: "#10479", customer: "Lucas Moreau", date: "Oct 23", total: "$56.00", status: "Paid" },
  { id: "#10478", customer: "Hana Sato", date: "Oct 22", total: "$128.40", status: "Refunded" },
  { id: "#10477", customer: "Omar Siddiqui", date: "Oct 22", total: "$472.10", status: "Shipped" },
  { id: "#10476", customer: "Elena Rossi", date: "Oct 21", total: "$73.25", status: "Paid" },
];

export const bestSellers = [
  { name: "Linen throw blanket", note: "312 sold", price: "$68" },
  { name: "Stoneware dinner set", note: "241 sold", price: "$124" },
  { name: "Oak bedside lamp", note: "198 sold", price: "$92" },
];

export const lowStock = [
  { name: "Brass candle holder", left: 4 },
  { name: "Cotton duvet cover, queen", left: 9 },
  { name: "Ceramic planter, large", left: 12 },
];

export const nav = [
  { group: "Store", items: [
    { label: "Overview", icon: "home" },
    { label: "Orders", icon: "bag", count: 24 },
    { label: "Products", icon: "box" },
    { label: "Customers", icon: "users" },
  ] },
  { group: "Growth", items: [
    { label: "Discounts", icon: "tag" },
    { label: "Analytics", icon: "chart" },
    { label: "Settings", icon: "gear" },
  ] },
];
