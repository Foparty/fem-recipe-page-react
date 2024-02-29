import React from 'react';
import styles from './RecepieContainer.module.css';
import ImageContainer from './ImageContainer';
import recepies from '../data/data';
import Heading from './Heading';
import Text from './Text';
import List from './List';
import ListItem from './ListItem';

const RecepieContainer = ({ children }) => {
	const recepie = recepies[0];
	return (
		<article className={styles.container}>
			<ImageContainer src={recepie.coverImg} alt={recepie.altCoverImg} />
			<div className={styles.contentContainer}>
				<Heading tag={'h1'}>{recepie.title}</Heading>
				<Text tag={'p'}>{recepie.description}</Text>
				<div className={styles.preparationCard}>
					<Heading tag={'h3'}>Preparation Time</Heading>
					<List type={'ul'}>
						{recepie.preparationTime.map((item, index) => (
							<ListItem key={index}>
								<strong>{item.title}: </strong>
								<span>{item.text}</span>
							</ListItem>
						))}
					</List>
				</div>
				<section className={styles.ingredients}>
					<Heading tag={'h2'}>Ingredients</Heading>
					<List type={'ul'}>
						{recepie.ingrediens.map((item, index) => (
							<ListItem key={index}>
								<span>{item.text}</span>
							</ListItem>
						))}
					</List>
				</section>
				<section className={styles.instructions}>
					<Heading tag={'h2'}>Instructions</Heading>
					<List type={'ol'}>
						{recepie.instructions.map((item, index) => (
							<ListItem key={index}>
								<strong>{item.title}</strong>
								<span>{item.text}</span>
							</ListItem>
						))}
					</List>
				</section>
				<section className={styles.nutrition}>
					<Heading tag={'h2'}>Nutrition</Heading>
					<Text tag={'p'}>{recepie.nutrition.description}</Text>
					<table className={styles.nutritable}>
						{recepie.nutrition.table.map((item, index) => (
							<>
								<tr>
									<td className={styles.nutritype}>{item.type}</td>
									<td className={styles.nutridata}>{item.text}</td>
								</tr>
							</>
						))}
					</table>
				</section>
			</div>
		</article>
	);
};

export default RecepieContainer;
