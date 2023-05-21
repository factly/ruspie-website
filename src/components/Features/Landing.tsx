import type { ReactNode } from 'react';

const avatars = [
  {
    src: '/assets/features_page/avatars/avatar1.png',
    children: (
      <>
        <span className="text-primary">Olivia Rhye</span> followed you!
        <div>@oliviarhye</div>
      </>
    ),
    opacity: 'opacity-100',
  },
  {
    src: '/assets/features_page/avatars/avatar2.png',
    children: (
      <>
        <span className="text-primary">Candice Wu</span> and 2 other gave you
        kudos on <span className="text-primary">Clubhouse 101</span> post
      </>
    ),
    opacity: 'opacity-100',
  },
  {
    src: '/assets/features_page/avatars/avatar3.png',
    children: (
      <>
        <span className="text-primary">Phoenix Baker</span> joined your team{' '}
        <span className="text-primary">Melbourne Startups Growth</span>
      </>
    ),
    opacity: 'opacity-75',
  },
  {
    src: '/assets/features_page/avatars/avatar4.png',
    children: (
      <>
        <span className="text-primary">Lana Steiner Baker</span> just launched{' '}
        <div className="text-primary">The 10k users challenge</div>
      </>
    ),
    opacity: 'opacity-50',
  },
];

const features = [
  {
    title: 'Share team inboxes',
    content:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    title: 'Share team inboxes',
    content:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    title: 'Share team inboxes',
    content:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
];

export default function Landing() {
  return (
    <section className="px-16 mt-24 flex flex-col items-center gap-8">
      <BadgeGroup />

      <h1 className="font-semibold text-[36px] leading-[44px] text-center">
        Cutting-edge features for advanced analytics
      </h1>

      <p className="text-[18px] text-center text-textLightPrimary">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="relative mt-8">
        <div className="max-h-[640px] rounded-bl-[8px] relative">
          <div className="relative z-10 max-h-[640px] bg-bgLight px-28 py-20 overflow-hidden rounded-t-full rounded-b-[100%]">
            <img
              src="/assets/features_page/landing.svg"
              alt="document editor"
            />
          </div>
          <div className="absolute bottom-0 -left-32 z-50 flex flex-col gap-4">
            {avatars.map((avatar, index) => (
              <Avatar key={index} {...avatar} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex text-center my-16">
        {features.map((item, index) => (
          <div className={`p-4 border-t-4 border-bgLight basis-1/3 ${index === 0 ? "border-primary": ""}`}>
            <div className="font-semibold text-[20px] mb-3">{item.title}</div>
            <div className='text-base text-foregroundFaint'>{item.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const BadgeGroup = () => (
  <div className="flex relative gap-1 text-sm font-[500] bg-bgLight p-1 rounded-[16px] w-max">
    <div
      className={`px-[10px] py-[2px] rounded-[16px] text-primary hover:underline hover:cursor-pointer flex gap-2 items-center`}
    >
      Features
    </div>
  </div>
);

const Avatar = ({
  src,
  children,
  opacity,
}: {
  src: string;
  children: ReactNode;
  opacity: string;
}) => (
  <div
    className={
      'px-6 py-4 flex items-center gap-4 relative bg-[rgba(255,255,255,0.5)] rounded-md backdrop-blur-md max-w-[340px] ' +
      opacity
    }
  >
    <img src={src} alt="Avatar" />
    <div className="text-[14px] text-[#344054]">{children}</div>
  </div>
);
