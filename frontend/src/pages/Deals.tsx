import React from "react";

type Deal = { id: number; name: string; stage: string };

export default function Deals() {
  const [deals, setDeals] = React.useState<Deal[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("http://localhost:8000/deals/") // note trailing slash
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setDeals)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading deals…</h1>;
  if (error) return <h1>Failed to load deals: {error}</h1>;

  return (
    <div>
      <h1>Deals</h1>
      <ul>
        {deals.map((d) => (
          <li key={d.id}>
            <strong>{d.name}</strong> — {d.stage}
          </li>
        ))}
      </ul>
    </div>
  );
}
