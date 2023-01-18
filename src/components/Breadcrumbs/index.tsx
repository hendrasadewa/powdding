'use client';

import { usePathname } from 'next/navigation';
import BreadcrumbContainer from './BreadcrumbContainer';
import BreadcrumbItem from './BreadcrumbItem';

function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname) {
    return null;
  }

  const pathWithoutQuery = pathname.split('?')[0];
  const breadcrumbs = pathWithoutQuery
    .split('/')
    .filter((path) => path !== '')
    .map((path, index, self) => ({
      href: `/${self.slice(0, index + 1).join('/')}`,
      label: path.split('-').join(' '),
    }));

  return (
    <BreadcrumbContainer>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </BreadcrumbContainer>
  );
}

export default Breadcrumbs;
