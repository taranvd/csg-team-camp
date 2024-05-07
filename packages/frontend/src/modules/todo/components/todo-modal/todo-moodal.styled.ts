// modalStyles.ts

import { css } from '@emotion/css';

export const styles = {
	modal: css`
		width: 400px; // Задайте ширину модального вікна
		padding: 20px; // Задайте відступи всередині модального вікна
	`,
	title: css`
		font-size: 20px; // Задайте розмір шрифту заголовка
		margin-bottom: 15px; // Задайте відступ вниз від заголовка
	`,
	buttonContainer: css`
		display: flex;
		justify-content: flex-end; // Вирівняйте кнопки вправо
		margin-top: 20px; // Задайте відступ зверху
	`,
};
