import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TodoView from '../todo-view/todo-view.component';
import { stylesContainer } from './todo-table.components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import TodoNotFound from '../todo-not-found/todo-not-found.component';
import { Todo } from '~shared/services/types';
import useUserStore from '~store/user.store';
import Loader from '~shared/components/loader/loader.component';

const TodoTablet: React.FC<{ todos: Todo[] }> = ({ todos }) => {
	const { isLoading } = useUserStore();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{todos.length > 0 ? (
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
					) : (
						<TodoNotFound />
					)}
				</>
			)}
		</>
	);
};

export default TodoTablet;
