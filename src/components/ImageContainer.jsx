import React from 'react';
import styles from './ImageContainer.module.css';

const ImageContainer = ({ src, alt }) => {
	return (
		<picture className={styles.img}>
			<img src={src} alt={alt} />
		</picture>
	);
};

export default ImageContainer;
