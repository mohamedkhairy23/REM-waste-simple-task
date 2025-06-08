import { useEffect, useState } from "react";

export const useSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((item) => ({
          ...item,
          id: item.id,
          hirePeriod: `${item.hire_period_days} day`,
          price: Math.round(item.price_before_vat),
          size: item.size,
          imageUrl: "/src/assets/skip.jpg",
        }));
        setSkips(enriched);
        setLoading(false);
      });
  }, []);

  return { skips, loading };
};
