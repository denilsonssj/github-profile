import { ReactNode } from 'react';

import Header from 'components/Header';
import GithubProvider from 'contexts/GithubContext';
import { MainLayoutContainer, Main } from './styles';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <GithubProvider>
      <MainLayoutContainer>
        <Header />
        <Main>
          {children}
        </Main>
      </MainLayoutContainer>
    </GithubProvider>
  );
}

export default MainLayout;
