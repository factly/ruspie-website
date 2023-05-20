import type { ReactNode } from 'react';

export function Button({
  children,
  appendClass,
}: {
  children: ReactNode;
  appendClass?: string;
}) {
  return (
    <button
      className={
        'rounded-[8px] px-[18px] py-[10px] bg-primary text-white font-semibold leading-6 text-[14px] ' +
        appendClass
      }
    >
      {children}
    </button>
  );
}

export function ButtonAlt({
  children,
  appendClass,
}: {
  children: ReactNode;
  appendClass?: string;
}) {
  return (
    <button
      className={
        'rounded-[8px] px-[18px] py-[10px] bg-[#F2F4F7] text-textLightPrimary font-semibold leading-6 text-[14px] ' +
        appendClass
      }
    >
      {children}
    </button>
  );
}
