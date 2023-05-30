import useFetch from '../../../../hooks/useFetch';
import './styles.scss';

const DashboardOrders = () => {
  const { data: ordersData } = useFetch('orders');
  const orders = ordersData?.results ?? [];

  console.log(orders);

  const renderDashboardOrders = () => {
    return orders.map((order, i) => (
      <div key={i} className="dashboard-orders-item">
        <p className="dashboard-orders-item-id">Commande #{order.id}</p>
        <p>
          <span>Utilisateur:</span> {order.username}
        </p>
        <p>
          <span>Produit(s):</span> {order.product_name}
        </p>
        <p>
          <span>Quantité:</span> {order.quantity}
        </p>
      </div>
    ));
  };

  return (
    <div className="dashboard-orders">
      <h2>Récapitulatif des commandes clients</h2>
      {renderDashboardOrders()}
    </div>
  );
};

export default DashboardOrders;
