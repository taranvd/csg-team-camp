import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useTodoStore from '~store/todos.store';
import TodoView from '../todo-view/todo-view.component';
import { stylesContainer } from './todo-table.components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const TodoTablet: React.FC = () => {
	const { todos } = useTodoStore();

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar]}
			effect="fade"
			className={stylesContainer}
			slidesPerView={1}
			centeredSlides={true}
			pagination={{ clickable: true }}
		>
			{todos.map((todo) => (
				<SwiperSlide key={todo.id}>
					<TodoView todo={todo} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TodoTablet;
