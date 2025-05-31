import { useState, useEffect } from "react";
import { getLatestAdverts, getTags } from "./service";
import type { Adverts } from "./types";
import Page from "../../components/ui/layout/page";
import Button from "../../components/ui/button";
import AdvertItem from "./advert-item";
import { Link } from "react-router-dom";
import "./adverts-page.css";
import type { Tag } from "./tag-types";

const EmptyList = () => (
  <div className="">
    <p>Be the first one!</p>
    <Button variant="primary">Create Advert</Button>
  </div>
);

const VALID_TAGS: Tag[] = ["mobile", "motor", "work", "lifestyle"];

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Adverts[]>([]);
  const [filterSale, setFilterSale] = useState("");
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [filterTags, setFilterTags] = useState<Tag[]>([]);

  /*useEffect(() => {
    async function getAdverts() {
      const adverts = await getLatestAdverts();
      setAdverts(adverts);
    }
    getAdverts();
  }, []); */

  useEffect(() => {
    async function fetchData() {
      const adverts = await getLatestAdverts();
      const tagsFromApi = await getTags();
      const validTags = tagsFromApi.filter((tag): tag is Tag =>
        VALID_TAGS.includes(tag as Tag),
      );
      setAdverts(adverts);
      setAvailableTags(validTags);
    }
    fetchData();
  }, []);

  const filteredAdverts = adverts.filter((advert) => {
    const matchesType = filterSale
      ? advert.sale === (filterSale === "sell")
      : true;

    const matchesTags = filterTags.length
      ? filterTags.every((tag) => advert.tags.includes(tag))
      : true;

    return matchesType && matchesTags;
  });

  return (
    <Page title="Adverts Page">
      <form className="filter-form">
        <label className="filter-label">
          Type:
          <select
            className="filter-select"
            value={filterSale}
            onChange={(e) => setFilterSale(e.target.value)}
          >
            <option value="">All</option>
            <option value="sell">Sell</option>
            <option value="buy">Buy</option>
          </select>
        </label>

        <div className="filter-tags">
          Tags:
          {availableTags.map((tag) => (
            <label key={tag} className="filter-tag-label">
              <input
                type="checkbox"
                checked={filterTags.includes(tag)}
                onChange={() =>
                  setFilterTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag],
                  )
                }
              />
              {tag}
            </label>
          ))}
        </div>
      </form>
      {filteredAdverts.length ? (
        <div className="advert-list">
          {filteredAdverts.map((advert) => (
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
