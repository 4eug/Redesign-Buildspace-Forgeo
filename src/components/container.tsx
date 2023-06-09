import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('mx-auto max-w-[120rem] px-8', className)}>
      {children}
    </div>
  );
};

export const HeaderContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'mx-auto px-[2px] py-[16px] lg:px-[92px] lg:py-[8px]',
        className
      )}
    >
      {children}
    </div>
  );
};

export const FooterContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        '2xl:mt-56 lg:mt-32 mt-64 lg:px-[92px] lg:py-[8px] bottom-10 w-full flex lg:justify-start justify-center items-center ',
        className
      )}
    >
      {children}
    </div>
  );
};
