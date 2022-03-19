/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	};
	if(product.id == 201) {
		return null;
	}

	return (
		<>
		{product.images[0] &&
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" />
			<div className={styles["product-info"]}>
				<div>
					<p>${product?.price}</p>
					<p>{product?.title}</p>
				</div>
				<figure 
					className={styles["more-clickable-area"]} 
					onClick={() => handleClick(product)} 
				>
					{state.cart.includes(product) 
						? <Image 
						className={`${styles.disabled} ${styles["add-to-cart-btn"]}`} 
						src={addedToCartImage} 
						alt="added to cart" 
						/>  : <Image 
						className={`${styles["add-to-cart-btn"]} ${styles.pointer}`} 
						src={addToCartImage} 
						alt="add to cart"
						/> }
				</figure>
			</div>
		</div>
		}
		</>
	);
};

export default ProductItem;
