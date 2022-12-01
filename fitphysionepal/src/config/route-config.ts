type TRouteConfig = {
  home: {
    routeName: string;
    routeURL: string;
  };
  about: {
    routeName: string;
    routeURL: string;
  };
  contact: {
    routeName: string;
    routeURL: string;
  };
  services: {
    routeName: string;
    routeURL: string;
  };
  booking: {
    routeName: string;
    routeURL: string;
  };
};

export const routeConfig: TRouteConfig = {
  home: {
    routeName: "home",
    routeURL: "/",
  },
  about: {
    routeName: "about",
    routeURL: "/about",
  },
  contact: {
    routeName: "contact",
    routeURL: "/contact",
  },
  services: {
    routeName: "services",
    routeURL: "/services",
  },
  booking: {
    routeName: "booking",
    routeURL: "/booking",
  },
};

type TRouteNavigation = {
  id: number;
  routeName: string;
  routeURL: string;
}[];

export const routeNavigation: TRouteNavigation = [
  {
    id: 1,
    routeName: "home",
    routeURL: "/",
  },
  {
    id: 2,
    routeName: "about",
    routeURL: "/about",
  },
  {
    id: 3,
    routeName: "contact",
    routeURL: "/contact",
  },
  {
    id: 4,
    routeName: "services",
    routeURL: "/services",
  },
  {
    id: 5,
    routeName: "booking",
    routeURL: "/booking",
  },
];
