import React from 'react';
import styles from '@styles/ShoppingCartItem.module.scss';
import Image from 'next/image';

const ShoppingCartItem = () => {
	return (
		<div className={styles.ShoppingCartItem}>
			<figure>
				<Image 
				src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
				alt="bike"
				width="100%"
				height="100%"
				layout="responsive" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
		</div>
	);
};

export default ShoppingCartItem;
