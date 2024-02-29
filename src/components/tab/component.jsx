/* eslint-disable react/prop-types */
import { Button } from "../button/component"

export const Tab = ({title, onClick, className, disabled}) => {

    return (
        <Button onClick={onClick} type={className} disabled={disabled}>
            {title}
        </Button>
    )
}