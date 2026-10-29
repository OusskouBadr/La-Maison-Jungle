import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import type { CartItem } from "../types";
import '../styles/Layout.css'

type HomePageProps = {
  cart: CartItem[];
  addToCart: (plant: { name: string; price: number }) => void;
};

function HomePage({ cart, addToCart }: HomePageProps) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList cart={cart} addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 