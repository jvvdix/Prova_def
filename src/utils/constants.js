export const ORDER_STATUSES = {
  IN_PROGRESS: "in lavorazione",
  SHIPPED: "spedito",
  CANCELLED: "annullato",
};

export const ORDER_STATUS_COLORS = {
  [ORDER_STATUSES.IN_PROGRESS]: "bg-yellow-100 text-yellow-800",
  [ORDER_STATUSES.SHIPPED]: "bg-green-100 text-green-800",
  [ORDER_STATUSES.CANCELLED]: "bg-red-100 text-red-800",
};

export const ROUTES = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  ORDERS: "/orders",
  ORDER_DETAIL: "/orders/:id",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

export const SIDEBAR_ITEMS = [
  { label: "Dashboard", path: ROUTES.DASHBOARD, icon: "🏠" },
  { label: "Profilo", path: ROUTES.PROFILE, icon: "👤" },
  { label: "Ordini", path: ROUTES.ORDERS, icon: "📦" },
  { label: "Impostazioni", path: ROUTES.SETTINGS, icon: "⚙️" },
];
