import { Button, ButtonAlt } from '../Buttons';

export default function Navbar() {
  const menuItems = ['Home', 'Features'];
  return (
    <nav className="flex px-16 justify-between items-center h-20 bg-bgLight">
      <div className="flex gap-10 font-semibold text-base leading-6 items-center">
        <img src="/assets/logo.png" alt="Factly Logo" />
        {menuItems.map((item, index) => (
          <MenuItem active={index === 0} key={index}>
            {item}
          </MenuItem>
        ))}
      </div>
      <div className='flex gap-2'>
        <ButtonAlt>Log in</ButtonAlt>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
}

const MenuItem = ({
  children,
  active,
}: {
  children: string;
  active?: boolean;
}) => (
  <span
    className={`font-semibold text-base leading-6 text-foregroundFaint cursor-pointer ${
      active ? 'text-foregroundStrong' : ''
    }`}
  >
    {children}
  </span>
);
