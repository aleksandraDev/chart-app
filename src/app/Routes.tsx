import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "../ui/components/Loader";

const Home = lazy(() => import("../ui/containers/Home"));
const Difficulty = lazy(() => import("../ui/containers/DifficultyContainer"));
const HashRate = lazy(() => import("../ui/containers/HashRateContainer"));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/difficulty" component={Difficulty} />
        <Route path="/hash-rate" component={HashRate} />
        <Redirect to="/" />
      </Switch>
    </ErrorBoundary>
  </Suspense>
);

export default Routes;
