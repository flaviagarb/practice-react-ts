import { useNavigate, useParams } from "react-router-dom";
import Page from "../../components/ui/layout/page";
import { useEffect, useState } from "react";
import type { Adverts } from "./types";
import { getAdvert } from "./service";
import { AxiosError } from "axios";
import { deleteAdvert } from "./service";
import ConfirmDialog from "../../components/confirm-dialog";
import Button from "../../components/ui/button";

function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Adverts | null>(null);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    if (!advert) return;

    try {
      await deleteAdvert(advert.id.toString());
      navigate("/adverts");
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;

        if (status === 404) {
          navigate("/404");
        } else if (status === 401) {
          navigate("/login");
        } else {
          console.error("Unexpected error while deleting:", error);
        }
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

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
        <>
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "1rem",
              }}
            >
              <Button variant="primary" onClick={() => setShowConfirm(true)}>
                Delete
              </Button>
            </div>
          </article>

          {showConfirm && (
            <ConfirmDialog
              message="Are you sure you want to delete this advert?"
              onConfirm={handleDelete}
              onCancel={() => setShowConfirm(false)}
            />
          )}
        </>
      )}
    </Page>
  );
}

export default AdvertPage;
