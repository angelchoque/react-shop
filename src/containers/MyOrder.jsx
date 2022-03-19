import React, { useContext } from 'react';
import Link from "next/link";
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import style from '@styles/MyOrder.module.scss';
import Image from 'next/image';

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={style.MyOrder}>
			<div className={style["MyOrder-container"]}>
				<div className={style["title-container"]}>
					<Image 
						className={style["more-clickable-area pointer"]} 
						src={arrow} 
						alt="arrow" 
						onClick={() => toggleOrder()} 
						/>
					<p className={style.title}>My order</p>
				</div>
				<div className={style["my-order-content"]}>
					<div className={style["my-orders"]}>
						{state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						))}
					</div>
					<div className={style.order}>
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button type='button' className={style["primary-button"]}>
						<Link href="/checkout">
							Checkout
						</Link>
					</button>
				</div>
			</div>
		</aside>
	);
};

export default MyOrder;
