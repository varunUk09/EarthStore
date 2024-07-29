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
              <a key={product.id} href={product.link}>
                <img src={product.image} className='productimg' />
                <span className='producttitle'>{product.title}</span>
                <span className='productprice'>from ${product.price}</span>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
