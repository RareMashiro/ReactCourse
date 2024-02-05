/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Header } from "../header/component"
import { Footer } from "../footer/component"


export const Layout = ({children}) => {    
    return (
        <div>
            <Header>Header</Header>
            <div>{children}</div>
            <Footer>Footer</Footer>
        </div>
    )
}