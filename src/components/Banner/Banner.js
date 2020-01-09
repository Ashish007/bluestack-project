import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Banner.scss';
import images from '../../../assets/images';
const Banner = () => {
    return <div className={styles.banner}>
            <img className={styles.banner__logo} src={images.logo} />
        </div>
}
export default Banner;