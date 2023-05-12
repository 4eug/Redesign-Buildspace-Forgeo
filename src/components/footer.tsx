import { Container, FooterContainer } from './container';
import { Discord } from './icons/discord';
import { Twitter } from './icons/twitter';

export const Footer = () => {
  return (
    <footer className="">
      <Container>
        <FooterContainer>
          <div className="lg:flex gap-4 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <Twitter />
              <Discord />
            </div>
            <div className="flex gap-4 justify-center items-center lg:mt-0 mt-2">
              <a href="">Faqs</a>
              <a href="">About us</a>
              <a href="">Join</a>
            </div>
          </div>
        </FooterContainer>
      </Container>
    </footer>
  );
};
