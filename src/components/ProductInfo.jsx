import React from 'react';
import styles from '@styles/ProductInfo.module.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';

const ProductInfo = () => {
  return (
    <>
      <Image 
      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      alt="bike"
      width="100%"
      height="100%"
      layout="responsive"  />
      <div className={styles.ProductInfo}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className={`${styles["primary-button"]} ${styles["add-to-cart-button"]}`}>
          <Image 
            src={addToCart}
            alt="add to cart"
          />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
