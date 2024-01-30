/* eslint-disable react/jsx-key */
import { Layout } from "./components/layout/component"

export const App = () => {
    return (
        <Layout />
    )
}

// Идеи по решению:
// 1) Создать компонент Button
// 2) Отрисовать 4 кнопки в Layout в качестве map над массивом restaurants
// 3) Внутрь кнопки передавать компонент Restaurants
// 4) Создать отдельный компонент для кнопок - и +
// 5) Прописать ограничение для значений 0 и 5
// 6) прописать стили для кнопок - и + 