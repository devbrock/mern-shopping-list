import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, deleteItemAction, getItemsAction } from '../redux';

export default function ShoppingList() {
	const items = useSelector(state => state.items);

	const dispatch = useDispatch();
	const addItem = name => dispatch(addItemAction(name));
	const deleteItem = id => dispatch(deleteItemAction(id));

	useEffect(() => {
		dispatch(getItemsAction());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container mx-auto">
			<button
				onClick={() => {
					const name = prompt('Enter Item');
					if (name) {
						// setItems([...items, { id: uuid(), name: name }]);
						addItem({
							name: name,
						});
					}
				}}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
			>
				Add Item
			</button>

			<ul className="mt-4">
				<TransitionGroup className="shopping-list">
					{items.map(({ _id, name }) => (
						<CSSTransition
							key={_id}
							timeout={500}
							classNames="fade"
							style={{ marginBottom: '0.5rem' }}
						>
							<li>
								{' '}
								<button
									className="bg-red-500 rounded px-2 mr-2 text-white"
									onClick={deleteItem.bind(this, _id)}
								>
									&times;
								</button>
								{name}
							</li>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ul>
		</div>
	);
}
