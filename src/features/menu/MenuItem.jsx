import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteCartItem from "../cart/DeleteCartItem";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(currentQuantity);

  const isInCart = currentQuantity > 0
  
    function handleAddToCart(){
      // console.log(id);
      const newItem = {
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
      };
      dispatch(addItem(newItem))
    }
  
    return (
      <li className="flex gap-4 py-2">
        <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale opacity-70' : ''}`} />
        <div className="flex grow flex-col pt-0.5">
          <p className="font-medium">{name}</p>
          <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>

          <div className="mt-auto flex items-center justify-between">
            {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase  font-medium text-stone-500">Sold out</p>}

            {isInCart && (
              <div className="flex items-center gap-3 sm:gap-8">
                  <UpdateCartQuantity pizzaId={id} currentQuantity={currentQuantity}/>
                  <DeleteCartItem pizzaId={id}/>
             </div>
             )}


            {!soldOut && !isInCart && <Button onClick={handleAddToCart} type='small'>Add to cart</Button>}
          </div>
        </div>
      </li>
    );
  }
  
  export default MenuItem;