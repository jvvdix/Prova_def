import { Link } from "react-router-dom";
import { mockOrders } from "../../data/mockData";
import "./RecentOrders.css";

const RecentOrders = () => {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="recent-orders">
      <div className="recent-orders-header px-6 py-4 border-b border-gray-200">
        <h3>Ordini Recenti</h3>
      </div>

      {/* product list */}
      <div className="divide-y divide-gray-200">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="recent-orders-item flex flex-col px-6 py-5 hover:bg-gray-50 rounded cursor-pointer"
          >
            {/* info */}
            <div className=" dataproduct mb-6">
              <p className="order-product-name font-semibold text-gray-900">
                {order.productName}
              </p>
              <p className="order-details text-gray-600 text-sm mt-1">
                {order.orderNumber} •{" "}
                {new Date(order.orderDate).toLocaleDateString("it-IT")}
              </p>
            </div>

            {/* sstatus and total */}
            <div className="flex items-center justify-between">
              <span
                className={`order-status status-${order.status.replace(
                  /\s+/g,
                  "-"
                )}`}
              >
                {order.status}
              </span>

              <p className="order-total font-semibold text-gray-900">
                €{order.total.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="recent-orders-footer px-6 py-3 border-t border-gray-200 text-right">
        <Link to="/orders" className="hover:underline text-indigo-600">
          Vedi tutti gli ordini →
        </Link>
      </div>
    </div>
  );
};

export default RecentOrders;
