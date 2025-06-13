import { Link } from "react-router-dom";
import { ORDER_STATUS_COLORS } from "../../utils/constants";
import "./OrderItem.css";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-item-header">
        <div className="order-item-info">
          <h3 className="order-item-product">{order.productName}</h3>
          <p className="order-item-number">{order.orderNumber}</p>
        </div>
        <span
          className={`order-item-status ${
            ORDER_STATUS_COLORS[order.status] || ""
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="order-item-details">
        <div className="order-item-row">
          <span className="label">Data ordine:</span>
          <span className="value">
            {new Date(order.orderDate).toLocaleDateString("it-IT")}
          </span>
        </div>
        <div className="order-item-row">
          <span className="label">Totale:</span>
          <span className="value total">€{order.total.toFixed(2)}</span>
        </div>
      </div>

      {/* link to order details */}
      <div className="order-item-footer">
        <Link to={`/orders/${order.id}`} className="order-item-link">
          Vedi dettagli <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default OrderItem;
