import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ children, type }) => {
	return <li className={styles.item}>{children}</li>;
};

export default ListItem;
