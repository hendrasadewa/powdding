import { Children, Fragment, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function BreadcrumbContainer({ children }: Props) {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav>
      <ol className="flex gap-2 font-mono">
        {childrenWtihSeperator}
      </ol>
    </nav>
  );
}

export default BreadcrumbContainer;
