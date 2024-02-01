/* eslint-disable react/prop-types */
import { Button } from "../button/component"

export const Tab = ({title, onClick, className}) => {
    return (
        <Button onClick={onClick} className={className}>
            {title}
        </Button>
    )
}