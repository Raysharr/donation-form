import styled from 'styled-components';

const CardHeaderContainer = styled.header`
  padding: 32px 40px 24px;
`;

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <CardHeaderContainer className={className}>{children}</CardHeaderContainer>
  );
}

export default CardHeader;
