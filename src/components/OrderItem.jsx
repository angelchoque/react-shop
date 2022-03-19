import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import style from '@styles/OrderItem.module.scss';
import Image from 'next/image';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={style.OrderItem}>
			<figure>
				<Image 
					src={product?.images[0]}
					alt={product?.title}
					className={style.OrderImage}
					width="100%"
					height="100%"
					layout="responsive"
					/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image
				className={`${style.pointer} ${style["more-clickable-area"]}`} 
				src={close} 
				alt="close" 
				onClick={() => handleRemove(product)}
				width="100%"
				height="100%"
				layout="responsive"
				/>
		</div>
	);
};

export default OrderItem;
