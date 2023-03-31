import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import { countries } from "./app/countries";
import { formatName } from "./helpers/formatName";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      {countries.map((country) => {
        return (
          <Route path={`/country/${formatName(country.name)}`} key={country.id}>
            <HomePage />
          </Route>
        );
      })}
    </Switch>
  );
};

export default Routes;
