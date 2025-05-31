import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import Page from "../../components/ui/layout/page";
import FormField from "../../components/ui/form-field";
import "./new-advert-page.css";
import { createAdvert } from "./service";
import { AxiosError } from "axios";

const TAGS = ["lifestyle", "mobile", "motor", "work"];

function NewAdvertPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sale, setSale] = useState<"buy" | "sell" | "">("");
  const [tags, setTags] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const isFormValid =
    name && sale && tags.length > 0 && price && !isNaN(Number(price));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("sale", (sale === "sell").toString());
    formData.append("price", price);
    tags.forEach((tag) => formData.append("tags", tag));
    if (photo) formData.append("photo", photo);

    try {
      const createdAdvert = await createAdvert(formData);
      navigate(`/adverts/${createdAdvert.id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          navigate("/login", { replace: true });
        }
      }
    }
  };

  const handleTagChange = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <Page title="Create New Advert">
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
        <FormField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="form-field">
          <label className="form-field-label">
            <span>Type</span>
            <select
              className="form-field-input"
              value={sale}
              onChange={(e) => setSale(e.target.value as "buy" | "sell")}
            >
              <option value="">Select...</option>
              <option value="sell">Sell</option>
              <option value="buy">Buy</option>
            </select>
          </label>
        </div>

        <div className="form-field">
          <label className="form-field-label">
            <span>Tags</span>
            <div className="flex flex-wrap gap-2 p-2">
              {TAGS.map((tag) => (
                <label key={tag} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={tags.includes(tag)}
                    onChange={() => handleTagChange(tag)}
                  />
                  {tag}
                </label>
              ))}
            </div>
          </label>
        </div>

        <FormField
          label="Price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="form-field">
          <label className="form-field-label">
            <span>Photo</span>
            <input
              className="form-field-input"
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
          </label>
        </div>

        <Button type="submit" variant="primary" disabled={!isFormValid}>
          Create Advert
        </Button>
      </form>
    </Page>
  );
}

export default NewAdvertPage;
