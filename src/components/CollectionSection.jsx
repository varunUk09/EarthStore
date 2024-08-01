import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";
import ProductDetailsWithQuantity from "@components/ProductDetailsWithQuantity";
export default function CollectionSection(props) {
  const { addToBag } = useContext(CartContext);
  const handleSubmit = event => {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        data[element.name] = element.value;
      }
    }
    console.log("Sending data : ", data);
    addToBag(data);
  };
  return (
    <section className='collection'>
      <div className='container'>
        <h2 className='title'>{props.title}</h2>
        {props.link && (
          <Link to='/products' className='cta cta-nbg'>
            VIEW ALL PRODUCTS
          </Link>
        )}
        <ul className='collectionItems'>
          {props.products.map(product => {
            return (
              <li key={product.id} className='collectionItem'>
                <img className='productimg' src={product.image} alt={product.title} />
                <span className='producttitle'>{product.title}</span>
                <span className='price'>from ${product.price}</span>
                <form
                  className='productAddtobagform'
                  onSubmit={e => {
                    handleSubmit(e);
                  }}>
                  <div className='productQtywrapper'>
                    <ProductDetailsWithQuantity id={product.id} image={product.image} title={product.title} price={product.price} quantity={1} />
                  </div>
                  <button className='productAtc cta cta-wbg' type='submit'>
                    Add to bag
                  </button>
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
