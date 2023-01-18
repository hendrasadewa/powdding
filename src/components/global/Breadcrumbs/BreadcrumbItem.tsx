import Link from 'next/link';
import { HTMLProps } from 'react';

interface ComponentProps {
  href: string;
}

type Props = HTMLProps<HTMLLIElement> & ComponentProps;

function BreadcrumbItem({ children, href, ...rest }: Props) {
  return (
    <li {...rest} className="capitalize  hover:text-slate-500">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default BreadcrumbItem;
