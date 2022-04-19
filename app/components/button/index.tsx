import React, { SelectHTMLAttributes, ReactChild, useRef } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: whitesmoke;
    padding: 100px;
`

interface ButtonProps {
    children: ReactChild     
}

type Props = SelectHTMLAttributes<HTMLButtonElement> & ButtonProps

export const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...rest }, ref) =>
{   
    return (
        <ButtonStyled {...rest} ref={ref}>
            {children}
        </ButtonStyled>
    );
});

Button.displayName = "Button";