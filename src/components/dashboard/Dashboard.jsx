import MetricsCard from "../../components/dashboard/MetricsCard";
import RecentOrders from "../../components/dashboard/RecentOrders";
import { mockMetrics } from "../../data/mockData";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="metrics-grid">
        <MetricsCard
          title="Ordini Totali"
          value={mockMetrics.totalOrders}
          color="bg-blue-500"
        />
        <MetricsCard
          title="In Lavorazione"
          value={mockMetrics.pendingOrders}
          color="bg-yellow-500"
        />
        <MetricsCard
          title="Spediti"
          value={mockMetrics.shippedOrders}
          color="bg-green-500"
        />
        <MetricsCard
          title="Totale Speso"
          value={`€${mockMetrics.totalSpent.toFixed(2)}`}
          color="bg-purple-500"
        />
      </div>
      {/* recent orders section */}
      <div className="recent-orders-grid">
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
