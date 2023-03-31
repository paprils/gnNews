import { useEffect, useState } from "react";
import { NewsList } from "../../interfaces/News";
import { useLocation } from "react-router-dom";
import { countries } from "../../app/countries";
import { formatName } from "../../helpers/formatName";

const useHomePage = () => {
  const [news, setNews] = useState<NewsList>();
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState<string>("pl");

  let location = useLocation();
  const apiKey = "ed67df5ba65c494080e8abb8abc6f36c";

  useEffect(() => {
    const innerCountry = location.pathname.slice(
      location.pathname.indexOf("/country/") + 9
    );

    countries.forEach((country) => {
      if (innerCountry === "") {
        setSlug("pl");
      } else if (innerCountry === formatName(country.name)) {
        setSlug(country.id);
      }
    });
  }, [location]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${slug}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        setNews(result);
        setLoading(false);
      });
  }, [slug]);

  return { news, loading };
};

export default useHomePage;
