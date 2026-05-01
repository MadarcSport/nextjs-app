const glasses = [
  { id: 1, name: "Classic Aviator", brand: "RayBan", price: "$149", color: "Gold/Green" },
  { id: 2, name: "Wayfarer", brand: "RayBan", price: "$129", color: "Black" },
  { id: 3, name: "Round Metal", brand: "Persol", price: "$199", color: "Silver/Blue" },
  { id: 4, name: "Cat Eye", brand: "Oakley", price: "$169", color: "Tortoise" },
  { id: 5, name: "Clubmaster", brand: "RayBan", price: "$159", color: "Brown/Gold" },
  { id: 6, name: "Sport Wrap", brand: "Oakley", price: "$189", color: "Matte Black" },
];

export default function ProductsPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>Glasses</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
        {glasses.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{item.name}</strong>
              <div style={{ color: "#666", fontSize: "0.9rem" }}>
                {item.brand} &mdash; {item.color}
              </div>
            </div>
            <span style={{ fontWeight: "bold" }}>{item.price}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
