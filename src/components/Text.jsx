import React from 'react';
import styles from './Text.module.css';

const Text = ({ tag, children }) => {
	const Tag = tag;
	return <Tag className={styles.text}>{children}</Tag>;
};

export default Text;
