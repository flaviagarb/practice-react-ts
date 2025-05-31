import "./advert-item.css";
import type { Adverts } from "./types";

interface AdvertItemProps {
  adverts: Adverts;
}

const AdvertItem = ({ adverts }: AdvertItemProps) => {
  const { name, sale, tags, price, photo } = adverts;
  return (
    <article className="advert-item">
      <img
        src={photo || "/descarga.png"}
        alt={name}
        className="advert-item-image"
      />
      <div className="advert-item-details">
        <h2 className="advert-item-title">{name}</h2>
        <p className="advert-item-type">{sale ? "Sell" : "Buy"}</p>
        <div className="advert-item-tags">
          {tags.map((tag) => (
            <span key={tag} className="advert-item-tag">
              #{tag}
            </span>
          ))}
        </div>
        <p className="advert-item-price">{price} €</p>
      </div>
    </article>
  );
};

export default AdvertItem;
