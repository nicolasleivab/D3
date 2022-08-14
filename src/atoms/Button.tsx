import React, { forwardRef } from 'react';
import styled from 'styled-components';
import type { TSize } from '../styles/types';

type TButtonType = 'primary' | 'secondary';

interface TButton extends React.ComponentPropsWithRef<'button'> {
  buttonType?: TButtonType;
  onClick?: (arg: any) => void;
  borderRadius?: TSize;
}

const StyledButton = styled.button<TButton>`
  cursor: pointer;
  background-color: ${({
    theme: {
      colors: { background, highlight },
    },
    buttonType,
  }) => (buttonType === 'primary' ? background : highlight)};
  color: ${({
    theme: {
      colors: { foreground },
    },
  }) => foreground};
  width: fit-content;
  border-radius: ${({
    theme: {
      spacing: { border },
    },
    borderRadius,
  }) => border[borderRadius || 'm']};
  padding: ${({
    theme: {
      spacing: { padding },
    },
  }) => padding.s};
  :focus {
    color: ${({
      theme: {
        colors: { focus },
      },
    }) => focus};
  }
`;

const Button = forwardRef(
  (
    { children, buttonType = 'primary', onClick, borderRadius }: TButton,
    ref: any
  ) => {
    return (
      <StyledButton
        buttonType={buttonType}
        ref={ref}
        onClick={onClick}
        borderRadius={borderRadius}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
