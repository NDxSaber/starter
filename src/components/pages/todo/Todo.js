import React from 'react';
import AddTodo from '../../../containers/TodoForm/TodoForm';
import VisibleTodoList from '../../../containers/VisibleTodoList/VisibleTodoList';
import Footer from '../../parts/Footer/Footer';

const Todo = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default Todo;