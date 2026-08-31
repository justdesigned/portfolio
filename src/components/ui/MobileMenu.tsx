import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  navItems: NavItem[];
}

export default function MobileMenu({ navItems }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        type='button'
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls='mobile-nav'
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className='flex size-9 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-100 md:hidden'
      >
        {isOpen ? (
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            aria-hidden='true'
          >
            <path
              d='M2 2L14 14M14 2L2 14'
              stroke='currentColor'
              strokeWidth='1.75'
              strokeLinecap='round'
            />
          </svg>
        ) : (
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            aria-hidden='true'
          >
            <path
              d='M2 4H14M2 8H14M2 12H14'
              stroke='currentColor'
              strokeWidth='1.75'
              strokeLinecap='round'
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          {/* backdrop */}
          <div
            className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden'
            onClick={close}
            aria-hidden='true'
          />

          {/* drawer */}
          <nav
            id='mobile-nav'
            aria-label='Mobile navigation'
            className='fixed inset-x-0 top-[57px] z-50 border-b border-white/5 bg-gray-950/95 px-4 pb-6 pt-4 backdrop-blur-md md:hidden'
          >
            <ul className='flex flex-col gap-1'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={close}
                    className='flex w-full rounded-md px-3 py-3 text-base font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='mt-4 border-t border-white/5 pt-4'>
              <a
                href='#contact'
                onClick={close}
                className='inline-flex w-full items-center justify-center rounded-md border border-cyan-400/60 bg-cyan-500/5 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300 transition-colors hover:border-cyan-300 hover:text-cyan-200'
              >
                Available for Hire
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
