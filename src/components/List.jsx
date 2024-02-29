import React from 'react';
import styles from './List.module.css';

const List = ({ type, children }) => {
	const Tag = type;
	return <Tag className={styles.list}>{children}</Tag>;
};

export default List;
