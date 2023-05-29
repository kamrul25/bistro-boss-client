
const OrderedFood = ({item}) => {
    const {image, price, name, recipe } = item;
    return (
        <div className="card w-96 glass relative">
        <figure className="h-96" ><img src={image} alt="car!" className="w-full h-full"/></figure>
        <button className="absolute right-3 top-4 btn "> Price: ${price}</button>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary uppercase">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default OrderedFood;