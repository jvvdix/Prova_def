import "./MetricsCard.css";

const MetricsCard = ({ title, value, icon, color = "bg-blue-500" }) => {
  return (
    <div className="metrics-card">
      <div className={`metrics-icon-wrapper ${color}`}>
        <span>{icon}</span>
      </div>
      <div className="metrics-content">
        <p className="metrics-title">{title}</p>
        <p className="metrics-value">{value}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
