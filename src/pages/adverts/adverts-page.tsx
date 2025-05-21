import { useState, useEffect } from "react";
import Button from "../../components/ui/button";
import { getLatestAdverts } from "./service";
import type { Adverts } from "./types";

interface AdvertsPageProps {
  active: boolean;
}

function AdvertsPage({ active }: AdvertsPageProps) {
  const [adverts, setAdverts] = useState<Adverts[]>([]);

  useEffect(() => {
    getLatestAdverts().then((response) => {
      setAdverts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Adverts Page</h1>
      <ul>
        {adverts.map((advert) => (
          <li key={advert.name}>
            {advert.name} - {advert.price}€ - {advert.tags.join(", ")}
          </li>
        ))}
      </ul>
      <Button variant="primary">Click me</Button>
    </div>
  );
}

export default AdvertsPage;
