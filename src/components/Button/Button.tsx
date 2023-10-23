import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border-radius: 5px;
  transition: background-color 0.2s ease;
  flex: 1;
  line-height: 20px;
`;

const ContainedButton = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.midnightPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 16px 24px;
  cursor: pointer;

  &:hover {
    background-color: #645d93;
  }

  &:active {
    background-color: #241e47;
  }
`;

const OutlinedButton = styled(ButtonStyled)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.purpleGrey};
  border: 1px solid ${({ theme }) => theme.colors.purpleGrey};
  padding: 14px 22px;
  cursor: pointer;

  &:hover {
    background-color: rgba(178, 167, 244, 0.1);
  }

  &:active {
    background-color: rgba(178, 167, 244, 0.25);
  }
`;

const variantToButtonMapping = {
  contained: ContainedButton,
  outlined: OutlinedButton,
};

interface ButtonProps {
  variant?: keyof typeof variantToButtonMapping;
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ variant = 'contained', children, onClick }: ButtonProps) {
  const ButtonComponent = variantToButtonMapping[variant];

  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
}

export default Button;
