import { useState, useEffect } from "react";
import { getLatestAdverts } from "./service";
import type { Adverts } from "./types";
import Page from "../../components/ui/layout/page";
import Button from "../../components/ui/button";
import AdvertItem from "./advert-item";
import { Link } from "react-router-dom";

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
      {adverts.length ? (
        <div className="advert-list">
          {adverts.map((advert) => (
            <Link to={`/adverts/${advert.id}`} key={advert.id}>
              <AdvertItem adverts={advert} />
            </Link>
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </Page>
  );
}

export default AdvertsPage;
