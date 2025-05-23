import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalCartPrice, clearCart } from "../cart/cartSlice";
import store from '../../store';
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


  //useNavigation state can either be loading, idle or submitting...

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  
  const dispatch = useDispatch();
  // const username = useSelector(state => state.user.username);
  const {
    username, 
    status: addressStatus, 
    position, 
    address,
    error: errorAddress,
  } = useSelector((state)=> state.user);

  const isLoadingAddress = addressStatus === 'loading';
  
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice; 
  
  if(!cart.length) return <EmptyCart />
  

  return (
    <div className="px-4 py-6">
      {/* {isSubmitting && <Loader />} */}
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"></Form> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input 
          type="text" 
          name="customer" 
          defaultValue={username}
          required 
          className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className='sm:basis-40'>Phone number</label>
          <div className="grow">
            <input 
            type="tel" 
            name="phone" 
            required 
            className="input w-full"
            />
          {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 rounded-full p-2 sm:flex-col">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className='sm:basis-40'>Address</label>
          <div className="grow">
            <input 
            className="input w-full"
            type="text" 
            name="address" 
            disabled={isLoadingAddress}
            defaultValue={address}
            required 
            />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          {/*r-3px, top-3px*/}
          <span className="absolute right-1 top-[34.5px] z-50 sm:right-1.5 sm:top-[5px]">
            {!position.longitude && !position.longitude && <Button 
                disabled={isLoadingAddress}
                type='small' 
                onClick={(e)=> 
                  {e.preventDefault();
                  dispatch(fetchAddress())}}
                  >
                    Get position
            </Button>}
          </span>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 placeholder:outline-none focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <input 
          type="hidden" 
          name="position" 
          value={position.latitude && position.longitude ? `${position.latitude}, ${position.longitude}` : ""} />

          <Button disabled={isSubmitting || isLoadingAddress} type='primary'>
              {isSubmitting ? "Placing order..." : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === 'true',
      // priority: data.priority === 'on',
    }

    // console.log(order);
    

    const errors = {};
    if (!isValidPhone(order.phone))
      errors.phone = 
        "Kindly give us your correct phone number. We might need it to contact you";
      
    if (Object.keys(errors).length > 0) return errors;


    // //if everything is okay create new order and redirect.
    const newOrder = await createOrder(order)

    //DO NOT OVERUSE: This was used to clear cart after order has been placed instead of using the dispatch function
    store.dispatch(clearCart())

    return redirect(`/order/${newOrder.id}`)
    // console.log(order);

    // return null;
    
} 

export default CreateOrder;