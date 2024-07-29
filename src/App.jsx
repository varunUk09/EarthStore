import "./App.css";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import CollectionSection from "@components/CollectionSection";

function App() {
  const HeroFeatureproducts = [
    {
      id: "1",
      link: "#",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "109.95",
    },
    {
      id: "2",
      link: "#",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "109.95",
    },
    {
      id: "3",
      link: "#",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "109.95",
    },
    {
      id: "4",
      link: "#",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "109.95",
    },
  ];
  return (
    <Layout>
      <main className='main'>
        <Hero />
        <CollectionSection products={HeroFeatureproducts} title='Feature' link='/products' />
      </main>
    </Layout>
  );
}

export default App;
