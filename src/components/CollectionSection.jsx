import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";
import ProductDetailsWithQuantity from "@components/ProductDetailsWithQuantity";
export default function CollectionSection(props) {
  const { addToBag } = useContext(CartContext);
  return (
    <section className='collection'>
      <div className='container'>
        <h2 className='title'>{props.title}</h2>
        {props.link && (
          <Link to='/products' className='cta cta-nbg'>
            VIEW ALL
          </Link>
        )}
        <ul className='collectionItems'>
          {props.products.map(product => {
            return (
              <li key={product.id} className='collectionItem'>
                <img className='productimg' src={product.image} alt={product.title} />
                <span className='producttitle'>{product.title}</span>
                <span className='productprice'>from ${product.price}</span>
                <form
                  className='productAddtobagform'
                  onSubmit={e => {
                    addToBag(e);
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
