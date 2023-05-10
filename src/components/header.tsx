import { Button } from './button';
import { Container, HeaderContainer } from './container';

import Link from 'next/link';
import { Logo } from './icons/logo';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full ">
      <Container>
        <HeaderContainer className="flex items-center">
          <Link className="flex items-center text-2xl" href="/">
            <Logo className="mr-4 h-[24px] w-[80px]" />
          </Link>
        </HeaderContainer>
      </Container>
    </header>
  );
};
