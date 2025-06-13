import { useParams, Link } from "react-router-dom";
import { mockOrders } from "../../data/mockData";
import { ORDER_STATUS_COLORS } from "../../utils/constants";
import "./OrderDetail.css";

const OrderDetail = () => {
  const { id } = useParams();
  const order = mockOrders.find((o) => o.id === parseInt(id));

  if (!order) {
    return (
      <div className="text-center py-12">
        <div className="icon-error mb-4">❌</div>
        <h2 className="title-error mb-2">Ordine non trovato</h2>
        <p className="desc-error mb-4">
          L'ordine richiesto non esiste o è stato rimosso.
        </p>
        {/* goes back to all the orders */}
        <Link to="/orders" className="btn-back-orders">
          Torna agli ordini
        </Link>
      </div>
    );
  }

  return (
    <div className="container max-w-3xl mx-auto px-4">
      <div className="mb-6">
        <Link to="/orders" className="link-back mb-4">
          ← Torna agli ordini
        </Link>
        <h1 className="title-page">Dettagli Ordine</h1>
      </div>

      <div className="order-card">
        <div className="order-header">
          <h2 className="order-number">{order.orderNumber}</h2>
          <span className={`order-status ${ORDER_STATUS_COLORS[order.status]}`}>
            {order.status}
          </span>
        </div>

        <div className="order-body grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="section-title">Informazioni Prodotto</h3>
            <div className="info-group">
              <dt className="info-label">Nome Prodotto</dt>
              <dd className="info-value">{order.productName}</dd>
            </div>
            <div className="info-group">
              <dt className="info-label">Descrizione</dt>
              <dd className="info-value">{order.description}</dd>
            </div>
          </div>

          <div>
            <h3 className="section-title">Dettagli Ordine</h3>
            <div className="info-group">
              <dt className="info-label">Data Ordine</dt>
              <dd className="info-value">
                {new Date(order.orderDate).toLocaleDateString("it-IT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </dd>
            </div>
            <div className="info-group">
              <dt className="info-label">Stato</dt>
              <dd className="info-value capitalize">{order.status}</dd>
            </div>

            {/* shows the total prices of the products */}
            <div className="info-group">
              <dt className="info-label">Totale</dt>
              <dd className="info-total">€{order.total.toFixed(2)}</dd>
            </div>
          </div>
        </div>

        {/* different status */}
        {order.status === "spedito" && (
          <div className="status-message status-shipped">
            <div>
              <p className="status-title">Ordine spedito!</p>
              <p className="status-desc">
                Il tuo ordine è in viaggio e arriverà presto.
              </p>
            </div>
          </div>
        )}

        {order.status === "in lavorazione" && (
          <div className="status-message status-processing">
            <div>
              <p className="status-title">Ordine in lavorazione</p>
              <p className="status-desc">
                Stiamo preparando il tuo ordine per la spedizione.
              </p>
            </div>
          </div>
        )}

        {order.status === "annullato" && (
          <div className="status-message status-cancelled">
            <div>
              <p className="status-title">Ordine annullato</p>
              <p className="status-desc">Questo ordine è stato annullato.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
