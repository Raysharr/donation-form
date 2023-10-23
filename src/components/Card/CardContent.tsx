import styled from 'styled-components';

const CardContentContainer = styled.div`
  padding: 32px 40px;
  background: ${({ theme }) => theme.colors.white};
`;

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

function CardContent({ children, className }: CardContentProps) {
  return (
    <CardContentContainer className={className}>
      {children}
    </CardContentContainer>
  );
}

export default CardContent;
