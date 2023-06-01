import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const OrderedFood = ({item}) => {
    const {image, price, name, recipe } = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item =>{
      const {  _id, name, image, price} = item;
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
        fetch(`https://bistro-boss-server-rouge.vercel.app/carts`, {
          method:"POST",
          headers:{
            "content-type": "application/json",
          }, 
          body:JSON.stringify(cartItem)
        })
        .then(res=> res.json())
        .then(data => {
          if(data.insertedId){
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Food added on the cart.',
                showConfirmButton: false,
                timer: 1500
              })
        }
        })
      }
      else{
        Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
    }

    return (
        <div className="card w-96 glass relative">
        <figure className="h-96" ><img src={image} alt="car!" className="w-full h-full"/></figure>
        <button className="absolute right-3 top-4 btn "> Price: ${price}</button>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleAddToCart(item)} className="btn btn-primary uppercase">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default OrderedFood;