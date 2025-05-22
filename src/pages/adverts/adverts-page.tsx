import { useState, useEffect } from "react";
import { getLatestAdverts } from "./service";
import type { Adverts } from "./types";
import Layout from "../../components/ui/layout/layout";

interface AdvertsPageProps {
  active: boolean;
  onLogout: () => void;
  isLogged: boolean;
}

function AdvertsPage({ active }: AdvertsPageProps) {
  const [adverts, setAdverts] = useState<Adverts[]>([]);

  useEffect(() => {
    async function getAdverts() {
      const adverts = await getLatestAdverts();
      setAdverts(adverts.data);
    }
    getAdverts();
  }, []);

  return (
    <Layout title="Home Page">
      <div>
        <h1>Adverts Page</h1>
        <ul>
          {adverts.map((advert) => (
            <li key={advert.name}>
              {advert.name} - {advert.price}€ - {advert.tags.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default AdvertsPage;
