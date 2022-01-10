import { ReactNode } from 'react';

import Header from 'components/Header';
import { MainLayoutContainer, Main } from './styles';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <MainLayoutContainer>
      <Header />
      <Main>
        {children}
      </Main>
    </MainLayoutContainer>
  );
}

export default MainLayout;
