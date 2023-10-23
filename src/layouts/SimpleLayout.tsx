import React from 'react';
import styled from 'styled-components';
import Logo from '~/components/Logo';

const SimpleLayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SimpleLayoutHeader = styled.header`
  padding: 24px 40px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

const SimpleLayoutContent = styled.main`
  flex: 1;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-items: flex-start;
  }
`;

type SimpleLayoutProps = {
  children: React.ReactNode;
};

function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <SimpleLayoutContainer>
      <SimpleLayoutHeader>
        <Logo />
      </SimpleLayoutHeader>

      <SimpleLayoutContent>{children}</SimpleLayoutContent>
    </SimpleLayoutContainer>
  );
}

export default SimpleLayout;
