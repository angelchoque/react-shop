import React from 'react';
import styles from '@styles/Order.module.scss';
import Image from 'next/image';
import arrowIcon from "../assets/icons/flechita.svg";

const Order = () => {
	return (
		<div className={styles.Order}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<Image 
				src={arrowIcon}
				alt="arrow"
				/>
		</div>
	);
};

export default Order;
