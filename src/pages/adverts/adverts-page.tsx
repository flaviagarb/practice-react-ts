import { useState, useEffect } from "react";
import { getLatestAdverts } from "./service";
import type { Adverts } from "./types";
import Layout from "../../components/ui/layout/layout";
import profile from "../../assets/profile.svg";

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
      setAdverts(adverts);
    }
    getAdverts();
  }, []);

  return (
    <Layout title="Home Page">
      <img src={profile} alt="Default profile" />
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
