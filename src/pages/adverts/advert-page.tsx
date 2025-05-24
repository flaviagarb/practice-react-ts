import { useParams } from "react-router";
import Page from "../../components/ui/layout/page";

function AdvertPage() {
  const params = useParams();
  return <Page title="Advert detail">Advert detail{params.advertId}</Page>;
}

export default AdvertPage;
