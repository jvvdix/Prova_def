export const mockUser = {
  id: 1,
  name: "Mario Rossi",
  email: "mario.rossi@email.com",
  avatar: "https://via.placeholder.com/40",
};

export const mockOrders = [
  {
    id: 1,
    productName: "Smartphone Samsung Galaxy S23",
    orderDate: "2024-01-15",
    status: "spedito",
    total: 899.99,
    orderNumber: "ORD-001",
    description: "Smartphone con display AMOLED 6.1 pollici",
  },
  {
    id: 2,
    productName: 'MacBook Pro 14"',
    orderDate: "2024-01-10",
    status: "in lavorazione",
    total: 2499.99,
    orderNumber: "ORD-002",
    description: "Laptop professionale con chip M3",
  },
  {
    id: 3,
    productName: "Air Pods Gen 3",
    orderDate: "2024-01-08",
    status: "annullato",
    total: 399.99,
    orderNumber: "ORD-003",
    description: "Cuffie wireless con cancellazione del rumore",
  },
  {
    id: 4,
    productName: "iPad Air",
    orderDate: "2024-01-05",
    status: "spedito",
    total: 699.99,
    orderNumber: "ORD-004",
    description: "Tablet con display Liquid Retina 10.9 pollici",
  },
  {
    id: 5,
    productName: "Apple Watch Series 9",
    orderDate: "2024-01-03",
    status: "in lavorazione",
    total: 449.99,
    orderNumber: "ORD-005",
    description: "Smartwatch con GPS e cellular",
  },
  {
    id: 6,
    productName: "Apple Watch SE",
    orderDate: "2024-01-01",
    status: "spedito",
    total: 349.99,
    orderNumber: "ORD-006",
    description: "Smartwatch con GPS",
  },
];

export const mockMetrics = {
  totalOrders: mockOrders.length,
  pendingOrders: mockOrders.filter((order) => order.status === "in lavorazione")
    .length,
  shippedOrders: mockOrders.filter((order) => order.status === "spedito")
    .length,
  cancelledOrders: mockOrders.filter((order) => order.status === "annullato")
    .length,
  totalSpent: mockOrders
    .filter((order) => order.status !== "annullato")
    .reduce((sum, order) => sum + order.total, 0),
};
