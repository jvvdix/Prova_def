import { useState, useMemo } from "react";
import OrderItem from "./OrderItem";
import OrderFilters from "./OrderFilters";
import { mockOrders } from "../../data/mockData";
import "./OrdersList.css";

const OrdersList = () => {
  const [filters, setFilters] = useState({
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  const filteredOrders = useMemo(() => {
    return mockOrders.filter((order) => {
      if (filters.status && order.status !== filters.status) {
        return false;
      }

      const orderDate = new Date(order.orderDate);

      if (filters.dateFrom) {
        const fromDate = new Date(filters.dateFrom);
        if (orderDate < fromDate) return false;
      }

      if (filters.dateTo) {
        const toDate = new Date(filters.dateTo);
        if (orderDate > toDate) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="orders-container px-4">
      <div className="header mb-6">
        <h1 className="title-page">I Miei Ordini</h1>
      </div>

      <OrderFilters filters={filters} onFiltersChange={setFilters} />

      <div className="info-count mb-4">
        <p>
          Mostrati {filteredOrders.length} di {mockOrders.length} ordini
        </p>
      </div>

      {/* if there are no orders available */}
      {filteredOrders.length === 0 ? (
        <div className="empty-state bg-white rounded-lg shadow p-12 text-center">
          <h3 className="empty-title mb-2">Nessun ordine trovato</h3>
          <p className="empty-desc"></p>
        </div>
      ) : (
        <div className="orders-list space-y-4">
          {filteredOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;
