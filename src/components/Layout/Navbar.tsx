import { Button, ButtonAlt } from '../Buttons';

export default function Navbar({ pathname }: { pathname: string }) {
  const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Features',
      href: '/features',
    },
  ];
  let active = 0;
  switch (pathname) {
    case '/':
      active = 0;
      break;
    case '/features':
      active = 1;
      break;
    default:
      active = 0;
      break;
  }
  return (
    <nav className="flex px-16 justify-between items-center h-20 bg-bgLight">
      <div className="flex gap-10 font-semibold text-base leading-6 items-center">
        <img src="/assets/logo_nav.svg" alt="Factly Logo" />
        {menuItems.map((item, index) => (
          <MenuItem active={active === index} key={index} href={item.href}>
            {item.name}
          </MenuItem>
        ))}
      </div>
      <div className="flex gap-2">
        <ButtonAlt>Log in</ButtonAlt>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
}

const MenuItem = ({
  children,
  active,
  href,
}: {
  children: string;
  active?: boolean;
  href: string;
}) => (
  <a
    className={`font-semibold text-base leading-6 text-foregroundFaint cursor-pointer ${
      active ? 'text-foregroundStrong' : ''
    }`}
    href={href}
  >
    {children}
  </a>
);
