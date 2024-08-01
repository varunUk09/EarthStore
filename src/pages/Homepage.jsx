import Hero from "@components/Hero";
import CollectionSection from "@components/CollectionSection";

function Homepage() {
  const HeroFeatureproducts = [
    {
      id: "1",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "109.95",
    },
    {
      id: "2",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: "22.3",
    },
    {
      id: "3",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      title: "Mens Cotton Jacket",
      price: "55.99",
    },
    {
      id: "4",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      title: "Mens Casual Slim Fit",
      price: "15.99",
    },
    {
      id: "5",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: "695",
    },
    {
      id: "6",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      title: "Solid Gold Petite Micropave ",
      price: "168",
    },
  ];
  return (
    <>
      <Hero />
      <CollectionSection products={HeroFeatureproducts} title='Feature' link='/products' />
    </>
  );
}

export default Homepage;
