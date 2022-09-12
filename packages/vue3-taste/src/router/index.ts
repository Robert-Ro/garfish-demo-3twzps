import { h } from "vue";
import { dynamicRoutes } from "@/utils";

export const routes = [
  {
    path: "/",
    component: {
      render: () => h("div", ["home"]),
    },
  },
  ...dynamicRoutes,
];
