import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TSize } from '../styles/types';

interface TButton extends React.ComponentPropsWithRef<'button'> {
  onClick?: (arg: any) => void;
  borderRadius?: TSize;
}

const StyledButton = styled.button<TButton>`
  background-color: ${({
    theme: {
      colors: { background },
    },
  }) => background};
  color: ${({
    theme: {
      colors: { foreground },
    },
  }) => foreground};
  width: ${({
    theme: {
      input: { width },
    },
  }) => width};
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
  ({ children, onClick, borderRadius }: TButton, ref: any) => {
    return (
      <StyledButton ref={ref} onClick={onClick} borderRadius={borderRadius}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
