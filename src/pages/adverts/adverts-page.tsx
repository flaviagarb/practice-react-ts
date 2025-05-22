import { useState, useEffect } from "react";
import Button from "../../components/ui/button";
import { getLatestAdverts } from "./service";
import type { Adverts } from "./types";
import { logout } from "../auth/service";

interface AdvertsPageProps {
  active: boolean;
  onLogout: () => void;
}

function AdvertsPage({ active, onLogout }: AdvertsPageProps) {
  const [adverts, setAdverts] = useState<Adverts[]>([]);

  useEffect(() => {
    async function getAdverts() {
      const adverts = await getLatestAdverts();
      setAdverts(adverts.data);
    }
    getAdverts();
  }, []);

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

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
      <Button disabled={false} variant="secondary" onClick={handleLogoutClick}>
        Logout
      </Button>
    </div>
  );
}

export default AdvertsPage;
