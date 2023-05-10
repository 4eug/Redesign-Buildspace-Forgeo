import { Container, FooterContainer } from './container';
import { Discord } from './icons/discord';
import { Twitter } from './icons/twitter';

export const Footer = () => {
  return (
    <footer className="">
      <Container>
        <FooterContainer>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-2">
              <Twitter />
              <Discord />
            </div>
            <h1>Faqs</h1>
            <h1>About us</h1>
            <h1>Join</h1>
          </div>
        </FooterContainer>
      </Container>
    </footer>
  );
};
