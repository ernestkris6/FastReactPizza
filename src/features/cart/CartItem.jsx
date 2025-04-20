import { useSelector } from "react-redux";
// import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateCartQuantity from "./UpdateCartQuantity";
import { getCurrentQuantityById } from "./cartSlice";
// import { deleteItem } from "./cartSlice";

function CartItem({ item }) {

    // const dispatch = useDispatch()
    const { pizzaId, name, quantity, totalPrice } = item;

    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

    // function handleDelete(){
    //   dispatch(deleteItem(pizzaId))
    // }
  
    return (
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <div className="flex justify-between items-center sm:gap-6">
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
          {/* <Button type='small' onClick={handleDelete}>Delete</Button> */}
          <UpdateCartQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
          <DeleteCartItem pizzaId={pizzaId}/>
        </div>
      </li>
    );
  }
  
  export default CartItem;