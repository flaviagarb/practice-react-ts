import { useState, useEffect } from "react";
import { getLatestAdverts } from "./service";
import type { Adverts } from "./types";
import Page from "../../components/ui/layout/page";
import Button from "../../components/ui/button";
import AdvertItem from "./advert-item";
import { Link } from "react-router";

const EmptyList = () => (
  <div className="">
    <p>Be the first one!</p>
    <Button variant="primary">Create Advert</Button>
  </div>
);

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Adverts[]>([]);

  useEffect(() => {
    async function getAdverts() {
      const adverts = await getLatestAdverts();
      setAdverts(adverts);
    }
    getAdverts();
  }, []);

  return (
    <Page title="Buy now">
      <div className="advert-list">
        {adverts.length ? (
          <ul className="advert-list">
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <AdvertItem adverts={advert} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
}

export default AdvertsPage;
