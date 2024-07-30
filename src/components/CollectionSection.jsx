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
              <li key={product.id} className='collectionItem'>
                <img className='productimg' src={product.image} alt={product.title} />
                <span className='producttitle'>{product.title}</span>
                <span className='productprice'>from ${product.price}</span>
                <form className='productAddtobagform'>
                  <div className='productQtywrapper'>
                    <button className='productQtyUp cta cta-wbg productQtyCta' type='button'>
                      +
                    </button>
                    <input type='number' className='productQtyInput' />
                    <button className='productQtyDown cta cta-wbg productQtyCta' type='button'>
                      -
                    </button>
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
