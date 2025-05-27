import { useNavigate, useParams } from "react-router-dom";
import Page from "../../components/ui/layout/page";
import { useEffect, useState } from "react";
import type { Adverts } from "./types";
import { getAdvert } from "./service";
import { AxiosError } from "axios";

function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Adverts | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.advertId) {
      return;
    }
    getAdvert(params.advertId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.status === 404) {
            navigate("/404");
          }
        }
      });
  }, [params.advertId, navigate]);

  return (
    <Page title="Advert detail">
      {advert && (
        <article
          className="advert-item"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <img
            src={advert.photo}
            alt={advert.name}
            className="advert-item-image"
          />
          <div className="advert-item-details">
            <h2 className="advert-item-title">{advert.name}</h2>
            <p className="advert-item-type">
              {advert.sale ? "Venta" : "Compra"}
            </p>
            <div className="advert-item-tags">
              {advert.tags.map((tag) => (
                <span key={tag} className="advert-item-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="advert-item-price">{advert.price} €</p>
          </div>
        </article>
      )}
    </Page>
  );
}

export default AdvertPage;
