import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    // console.log("cartitems", cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const totalCost = cartItems.reduce(((total, cartItem) => {
        return(
            total + (cartItem.card.info.price / 100 || cartItem.card.info.defaultPrice / 100)
        )
    }), 0);

    

    return (
        
        <div className="w-4/12 mx-auto my-10 shadow">

            <div className="p-5">
                <h3 className="font-semibold text-lg">Cart</h3>
                <hr className="w-[30px] mt-[10px] border border-black" />
            </div>
            <h4 className="pr-8 text-end text-sm text-red-700 cursor-pointer underline" onClick={handleClearCart}>Clear X</h4>
            {
                cartItems.length === 0 && <h4 className="text-center">Please Add items to the cart.</h4>
            }
            {/* Restaurant Name */}
            {/* <div className="flex gap-1 p-5">
                <div className="w-3/12">
                    <img src="" className="w-full object-cover" />
                </div>
                <div className="w-9/12">
                    <h3 className="font-semibold text-lg">Cart</h3>
                    <p className="text-sm text-gray-700">Rajpur</p>
                    <hr className="w-2/12 mt-[10px] border border-black" />
                </div>
            </div> */}

            <div className="p-5">
                {
                    cartItems.map((cartItem) => (
                        <div key={cartItem.card.info.id}>
                        {/* Cart Items */}
                    
                            <div className="flex">
                                <div className="p-2 w-10/12">
                                    <p><span className="text-[12px]  relative -top-1 -left-1">⬜<span className="text-[6px] absolute top-[5px] left-[4px] ">🟢</span></span>{cartItem.card.info.name}</p>
                                </div>
                                <div className="p-2">
                                    <p>₹ {(cartItem.card.info.price / 100) || (cartItem.card.info.defaultPrice / 100)}</p>
                                </div>
                            </div>
                        </div>
                        ))
                }
                <blockquote className="text-sm text-center bg-gray-100 my-4 mx-2 text-gray-600 py-3"><span className="text-lg font-bold text-black">❛❛</span> Any suggestions? We will pass it on...</blockquote>
            

                    <div className="flex justify-between px-5 pt-4 font-bold border-t-[1px]">
                        <h3>To Pay</h3>
                        <h3>₹ {totalCost}</h3>
                    </div>
                </div>


            
            
        </div>
              
        
    )
}

export default Cart;