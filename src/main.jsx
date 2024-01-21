/* eslint-disable react/no-children-prop */
import ReactDOM from 'react-dom/client'
import { restaurants } from '../materials/mock';
// import React from 'react';
// import { restaurants } from '../materials/mock';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <div className='restaurant'>
            <h1 className='head'>{restaurants[0].name}</h1>
            <h3 className='menu'>Меню</h3>
            <ul className='menu-list'>
                <li className='menu-item'>{restaurants[0].menu[0].name}</li>
                <li className='menu-item'>{restaurants[0].menu[1].name}</li>
                <li className='menu-item'>{restaurants[0].menu[2].name}</li>
            </ul>
            <h3 className='review'>Отзывы</h3>
            <ul className='review-list'>
                <li className='review-item'>{restaurants[0].reviews[0].text}</li>
                <li className='review-item'>{restaurants[0].reviews[1].text}</li>
            </ul>
        </div>
        <div className='restaurant'>
            <h1 className='head'>{restaurants[1].name}</h1>
            <h3 className='menu'>Меню</h3>
            <ul className='menu-list'>
                <li className='menu-item'>{restaurants[1].menu[0].name}</li>
                <li className='menu-item'>{restaurants[1].menu[1].name}</li>
            </ul>
            <h3 className='review'>Отзывы</h3>
            <ul className='review-list'>
                <li className='review-item'>{restaurants[1].reviews[0].text}</li>
                <li className='review-item'>{restaurants[1].reviews[1].text}</li>
                <li className='review-item'>{restaurants[1].reviews[2].text}</li>
            </ul>
        </div>
        <div className='restaurant'>
            <h1 className='head'>{restaurants[2].name}</h1>
            <h3 className='menu'>Меню</h3>
            <ul className='menu-list'>
                <li className='menu-item'>{restaurants[2].menu[0].name}</li>
                <li className='menu-item'>{restaurants[2].menu[1].name}</li>
                <li className='menu-item'>{restaurants[2].menu[2].name}</li>
            </ul>
            <h3 className='review'>Отзывы</h3>
            <ul className='review-list'>
                <li className='review-item'>{restaurants[2].reviews[0].text}</li>
            </ul>
        </div>
        <div className='restaurant'>
            <h1 className='head'>{restaurants[3].name}</h1>
            <h3 className='menu'>Меню</h3>
            <ul className='menu-list'>
                <li className='menu-item'>{restaurants[3].menu[0].name}</li>
                <li className='menu-item'>{restaurants[3].menu[1].name}</li>
            </ul>
            <h3 className='review'>Отзывы</h3>
            <ul className='review-list'>
                <li className='review-item'>{restaurants[3].reviews[0].text}</li>
                <li className='review-item'>{restaurants[3].reviews[1].text}</li>
            </ul>
        </div>
    </div>
);

// root.render(
//     React.createElement('div', {children: [
//         React.createElement('div', {children: [
//             React.createElement('h1', {children: restaurants[0].name}),
//             React.createElement('h3', {children: 'Меню'}),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[0].menu[0].name}),
//                 React.createElement('li', {children: restaurants[0].menu[1].name}),
//                 React.createElement('li', {children: restaurants[0].menu[2].name})
//             ]}),
//             React.createElement('h3', {children: 'Отзывы'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[0].reviews[0].text}),
//                 React.createElement('li', {children: restaurants[0].reviews[1].text})
//             ]})
//         ]}),
//         React.createElement('div', {children: [
//             React.createElement('h1', {children: restaurants[1].name}),
//             React.createElement('h3', {children: 'Меню'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[1].menu[0].name}),
//                 React.createElement('li', {children: restaurants[1].menu[1].name})
//             ]}),
//             React.createElement('h3', {children: 'Отзывы'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[1].reviews[0].text}),
//                 React.createElement('li', {children: restaurants[1].reviews[1].text}),
//                 React.createElement('li', {children: restaurants[1].reviews[2].text})
//             ]})
//         ]}),
//         React.createElement('div', {children: [
//             React.createElement('h1', {children: restaurants[2].name}),
//             React.createElement('h3', {children: 'Меню'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[2].menu[0].name}),
//                 React.createElement('li', {children: restaurants[2].menu[1].name}),
//                 React.createElement('li', {children: restaurants[2].menu[2].name})
//             ]}),
//             React.createElement('h3', {children: 'Отзывы'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[2].reviews[0].text})
//             ]})
//         ]}),
//         React.createElement('div', {children: [
//             React.createElement('h1', {children: restaurants[3].name}),
//             React.createElement('h3', {children: 'Меню'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[3].menu[0].name}),
//                 React.createElement('li', {children: restaurants[3].menu[1].name})
//             ]}),
//             React.createElement('h3', {children: 'Отзывы'} ),
//             React.createElement('ul', {children: [
//                 React.createElement('li', {children: restaurants[3].reviews[0].text}),
//                 React.createElement('li', {children: restaurants[3].reviews[1].text})
//             ]})
//         ]})
//     ]})
// );

