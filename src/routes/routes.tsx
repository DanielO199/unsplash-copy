import Loadable from "react-loadable";

import { Spinner } from "components";

const Search = Loadable({
  loader: () => import("views/Search/Search"),
  loading: Spinner
});

const Results = Loadable({
  loader: () => import("views/Result/Result"),
  loading: Spinner
});

export const publicRoutes = [
  {
    path: "/",
    name: "Search View",
    component: Search,
    exact: true
  },
  {
    path: "/results",
    name: "Results View",
    component: Results
  }
];
