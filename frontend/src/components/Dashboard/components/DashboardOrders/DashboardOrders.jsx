import useFetch from '../../../../hooks/useFetch';
import './styles.scss';

const DashboardOrders = () => {
  const { data: ordersData } = useFetch('orders');
  const orders = ordersData?.results ?? [];

  const renderDashboardOrders = () => {
    return orders.map((order, i) => (
      <div key={i} className="dashboard-orders-container">
        <p className="dashboard-orders-container-id">Commande #{order.id}</p>
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
    <>
      <h2>Récapitulatif des commandes clients ({orders.length})</h2>
      <div className="dashboard-orders">{orders.length !== 0 ? renderDashboardOrders() : <p>Aucune commande.</p>}</div>
    </>
  );
};

export default DashboardOrders;
