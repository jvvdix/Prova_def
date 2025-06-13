import { ORDER_STATUSES } from "../../utils/constants";
import "./OrderFilters.css";

const OrderFilters = ({ filters, onFiltersChange }) => {
  // handles status  change
  const handleStatusChange = (e) => {
    onFiltersChange({
      ...filters,
      status: e.target.value,
    });
  };

  // handles date from  change
  const handleDateFromChange = (e) => {
    onFiltersChange({
      ...filters,
      dateFrom: e.target.value,
    });
  };

  // handles date to change
  const handleDateToChange = (e) => {
    onFiltersChange({
      ...filters,
      dateTo: e.target.value,
    });
  };

  // clears all filters
  const clearFilters = () => {
    onFiltersChange({
      status: "",
      dateFrom: "",
      dateTo: "",
    });
  };

  return (
    // filter form containers
    <div className="order-filters">
      <h3>Filtri</h3>

      <div className="grid">
        <div>
          <label htmlFor="status">Stato</label>
          <select
            id="status"
            value={filters.status}
            onChange={(e) =>
              onFiltersChange({ ...filters, status: e.target.value })
            }
          >
            <option value="">Tutti gli stati</option>
            <option value={ORDER_STATUSES.IN_PROGRESS}>In Lavorazione</option>
            <option value={ORDER_STATUSES.SHIPPED}>Spedito</option>
            <option value={ORDER_STATUSES.CANCELLED}>Annullato</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateFrom">Data da</label>
          <input
            type="date"
            id="dateFrom"
            value={filters.dateFrom}
            onChange={(e) =>
              onFiltersChange({ ...filters, dateFrom: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="dateTo">Data a</label>
          <input
            type="date"
            id="dateTo"
            value={filters.dateTo}
            onChange={(e) =>
              onFiltersChange({ ...filters, dateTo: e.target.value })
            }
          />
        </div>

        {/* button to clear filters */}

        <div className="flex items-end">
          <button
            onClick={() =>
              onFiltersChange({ status: "", dateFrom: "", dateTo: "" })
            }
          >
            Pulisci Filtri
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFilters;
