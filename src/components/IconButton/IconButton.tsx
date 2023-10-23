import icons from '~/constants/icons';
import Icon from '../Icon/Icon';
import styled from 'styled-components';

const IconButtonStyled = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f5fe;
  }

  &:active {
    background-color: #e8eaf2;
  }
`;

interface IconButtonProps {
  name: keyof typeof icons;
  onClick: () => void;
  className?: string;
}

function IconButton({ name, onClick, className }: IconButtonProps) {
  return (
    <IconButtonStyled onClick={onClick} className={className}>
      <Icon name={name} />
    </IconButtonStyled>
  );
}

export default IconButton;
