const recepies = [
	{
		title: 'Simple Omelette Recipe',
		coverImg: '/image-omelette.jpeg',
		altCoverImg: 'omelete with cheese',
		description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
		preparationTime: [
			{
				title: 'Total',
				text: 'Approximately 10 minutes',
			},
			{
				title: 'Preparation',
				text: '5 minutes',
			},
			{
				title: 'Cooking',
				text: '5 minutes',
			},
		],
		ingrediens: [
			{
				text: '2-3 large eggs',
			},
			{
				text: 'Salt, to taste',
			},
			{
				text: 'Pepper, to taste',
			},
			{
				text: '1 tablespoon of butter or oil',
			},
			{
				text: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
			},
		],
		instructions: [
			{
				title: 'Beat the eggs:',
				text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
			},
			{
				title: 'Heat the pan:',
				text: 'Place a non-stick frying pan over medium heat and add butter or oil.',
			},
			{
				title: 'Cook the omelette:',
				text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
			},
			{
				title: 'Add fillings (optional):',
				text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
			},
			{
				title: 'Fold and serve:',
				text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
			},
			{
				title: 'Enjoy:',
				text: 'Serve hot, with additional salt and pepper if needed.',
			},
		],
		nutrition: {
			description: 'The table below shows nutritional values per serving without the additional fillings.',
			table: [
				{
					type: 'Calories',
					text: '277kcal',
				},
				{
					type: 'Carbs',
					text: '0g',
				},
				{
					type: 'Protein',
					text: '20g',
				},
				{
					type: 'Fat',
					text: '22g',
				},
			],
		},
	},
];

export default recepies;
