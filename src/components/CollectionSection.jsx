import { Link } from "react-router-dom";
export default function CollectionSection(props) {
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
              <Link key={product.id} to={`/products/${product.id}`}>
                <img className='productimg' src={product.image} alt={product.title} />
                <span className='producttitle'>{product.title}</span>
                <span className='productprice'>from ${product.price}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
