import classNames from 'classnames';

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        'my-2 lg:text-[84px] md:text-[72px] text-[48px] font-bold lg:leading-[92.4px] md:leading-[79.2px] leading-[52.8px]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        'mb-6 lg:text-[21px] md:text-[16px] text-[12px] font-light lg:leading-[30.05px] md:leading-[21.86px] leading-[16.39px]',
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="lg:text-start text-center grid">{children}</div>;
};
