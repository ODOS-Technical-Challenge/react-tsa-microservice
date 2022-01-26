interface RouteType {
  path: string;
  roles?: string[];
}

export const ROUTES: Record<string, RouteType> = {
  Login: { path: "login" },
  Home: { path: "/home" },
};
