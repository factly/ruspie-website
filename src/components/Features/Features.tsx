import type { ReactNode } from 'react';
import { Button } from '../Buttons';
import { FiArrowUpRight } from '@react-icons/all-files/fi/FiArrowUpRight';
import { FaRegCheckCircle } from '@react-icons/all-files/fa/FaRegCheckCircle';
import { IoChatbubblesOutline } from '@react-icons/all-files/io5/IoChatbubblesOutline';
import { BsLightning } from '@react-icons/all-files/bs/BsLightning';
import { GrLineChart } from '@react-icons/all-files/gr/GrLineChart';

const features: FeatureItemProps[] = [
  {
    title: 'Share team inboxes',
    content:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    icon: <IoChatbubblesOutline />,
    list: [
      'Leverage automation to move fast',
      'Always give customers a human to chat to',
      'Automate customer support and close leads faster',
    ],
    image: '/assets/features/inboxes.png',
  },
  {
    title: 'Deliver instant answers',
    content:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: <BsLightning />,
    list: [
      'Keep your customers in the loop with live chat',
      'Embed help articles right on your website',
      'Customers never have to leave the page to find an answer',
    ],
    image: '/assets/features/answers.png',
  },
  {
    title: 'Manage your team with reports',
    content:
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    icon: <GrLineChart />,
    list: [
      'Filter, export, and drilldown on the data quickly',
      'Save, schedule, and automate reports to your inbox',
      'Connect the tools you already use with 100+ integrations',
    ],
    image: '/assets/features/reports.png',
  },
  {
    title: 'Deliver instant answers',
    content:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: <BsLightning />,
    list: [
      'Keep your customers in the loop with live chat',
      'Embed help articles right on your website',
      'Customers never have to leave the page to find an answer',
    ],
    image: '/assets/features/discussion.png',
  },
];

export default function Features() {
  return (
    <section className='px-16'>
      <Header />
      <div className='grid gap-24'>
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} order={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

const Header = () => (
  <div className="text-center flex flex-col gap-6 my-24">
    <h2 className="font-semibold text-foregroundStrong">Features</h2>
    <h1 className="text-[36px] font-semibold text-foregroundStrong">
      Beautiful analytics to grow smarter
    </h1>
    <p className="text-textLightPrimary text-[18px]">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
  </div>
);

const FeatureItem = ({
  title,
  content,
  icon,
  list,
  order,
  image,
}: FeatureItemProps) => (
  <div
    className={`flex gap-20 ${order ? '' : 'flex-row-reverse'}`}
  >
    <div className='basis-1/2 items-center justify-center flex'>
      <div className="flex flex-col gap-8 justify-center">
        <div className="flex gap-6 items-center">
          <div className="bg-[#F9F5FF] p-2 rounded-full">
            <div className="bg-[#F4EBFF] rounded-full p-3 font-semibold text-2xl">
              {icon}
            </div>
          </div>
          <h3 className="font-semibold text-foregroundStrong text-[30px]">
            {title}
          </h3>
        </div>
        <p className="text-textLightPrimary text-[18px]">{content}</p>
        <ul className="ml-4 flex flex-col gap-4">
          {list.map((item, index) => (
            <li
              key={index}
              className="text-textLightPrimary text-[18px] flex items-center gap-4"
            >
              <FaRegCheckCircle className="text-xl font-semibold text-foregroundStrong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div>
          <Button appendClass="flex items-center gap-2 px-10">
            Try it <FiArrowUpRight className="text-xl" />
          </Button>
        </div>
      </div>
    </div>

    <div className="overflow-hidden rounded-xl flex items-center justify-center basis-1/2">
      <img src={image} className="relative block" alt={title} />
    </div>
  </div>
);

interface FeatureItemProps {
  title: string;
  content: string;
  icon: ReactNode;
  list: string[];
  order?: boolean;
  image: string;
}
