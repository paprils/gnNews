import React from "react";
import css from "./HomePage.module.scss";
import Header from "../Header";
import { Grid } from "@mui/material";
import useHomePage from "./HomePage.hook";
import NewsList from "../NewsList";
import Loader from "../Loader";
import { useAppSelector } from "../../app/hooks";
import { selectListType } from "../../features/listType/listTypeSlice";
import { countries } from "../../app/countries";
import { useHistory } from "react-router-dom";
import { formatName } from "../../helpers/formatName";
import Footer from "../Footer";

const HomePage = () => {
  const { news, loading } = useHomePage();
  const listType = useAppSelector(selectListType);
  const history = useHistory();

  return (
    <div>
      <Header />
      <div className={css.homePage}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4}>
            <ul className={css.homePage__countriesList}>
              {countries.map((country) => {
                return (
                  <li
                    className={css.homePage__countriesList__country}
                    key={country.id}
                    onClick={() =>
                      history.push(`/country/${formatName(country.name)}`)
                    }
                    data-testid={"countries"}
                  >
                    {country.flag + " " + country.name}
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item lg={8} md={8}>
            {loading && <Loader />}
            {news && <NewsList list={news.articles} type={listType.type} />}
          </Grid>
        </Grid>
      </div>
      <Footer news={news && news.articles} />
    </div>
  );
};

export default HomePage;
