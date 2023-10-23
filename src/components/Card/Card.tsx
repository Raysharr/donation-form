import styled from 'styled-components';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 16px 32px 0px rgba(30, 42, 50, 0.08);
`;

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ className, children }: CardProps) {
  return <CardContainer className={className}>{children}</CardContainer>;
}

export default Card;
