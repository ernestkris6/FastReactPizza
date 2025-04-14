import { Link } from "react-router-dom";

function CartOverview() {
    return (
      <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase py-4 px-4 sm:px-6">
        <p className="space-x-4 text-stone-300 text-sm sm:space-x-6 md:text-base">
          <span>23 pizzas</span>
          <span>$23.45</span>
        </p>
        <Link to='/cart'>Open cart &rarr;</Link>
      </div>
    );
  }
  
  export default CartOverview;