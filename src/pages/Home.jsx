


import ProductList from "../components/ProductList";
import products from "../data/products";

const Home = ({ searchQuery, filters }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.gender ? product.gender === filters.gender : true) &&
      (filters.color ? product.color === filters.color : true)
  );

  return (
    <div className="p-6">
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
