/* eslint-disable react/jsx-key */
import { Header } from "../header/component"
import { Footer } from "../footer/component"
import { restaurants } from "../../../materials/mock";
import { Button } from "../button/component";
import { Title } from "../title/component";
import { useState } from "react";
import './styles.scss';
import { Restaurants } from "../restaurants/component";

export const Layout = ({children}) => {
    const [count, setCount] = useState(0);

    const changeStyle = (event) => {        
        const target = document.getElementsByClassName(event.currentTarget.textContent)[0];
        
        if(count === 0) {
            event.currentTarget.classList.toggle('open');
            target.classList.toggle('isClose');
            setCount(1);
            return;
        }

        if(!target.classList.contains('isClose')) {
            event.currentTarget.classList.toggle('open');
            target.classList.toggle('isClose');
            setCount(0);
            return;
        }
    }
    
    return (
        <div>
            <Header>Header</Header>
            <div className="top-menu">
                {restaurants.map(restaurant => (
                    <Button type='large' onClick={changeStyle}>
                        <Title title={restaurant}/>
                    </Button>
                ))}
            </div>
            <div>
                {restaurants.map(restaurant => (
                    <Restaurants place={restaurant} />
                ))}
            </div>
            <Footer>Footer</Footer>
        </div>
    )
}