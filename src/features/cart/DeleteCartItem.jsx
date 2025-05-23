import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteCartItem({pizzaId}) {


    const dispatch = useDispatch();

    function handleDelete(){
        dispatch(deleteItem(pizzaId))
    }


  return (
    <Button type='small' onClick={handleDelete}>Delete</Button>
  )
}
