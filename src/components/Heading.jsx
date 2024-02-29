import React from 'react';
import styles from './Heading.module.css';

const Heading = ({ tag, children }) => {
	const Tag = tag;
	return <Tag className={styles.heading}>{children}</Tag>;
};

export default Heading;
