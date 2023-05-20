import { Button, ButtonAlt } from '../Buttons';
import { FiPlayCircle } from '@react-icons/all-files/fi/FiPlayCircle';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';

export default function Landing() {
  return (
    <section className="px-16 mt-24 flex flex-col items-center gap-8">
      <BadgeGroup />

      <h1 className="font-semibold text-[60px] leading-[72px] text-center">
        Beautiful analytics to grow smarter
      </h1>

      <p className="text-[20px] text-center text-textLightPrimary">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="flex gap-4 my-4">
        <ButtonAlt appendClass="border-[1px] border-[#D0D5DD] text-[18px] font-semibold px-7 py-4 flex gap-2 items-center">
          <FiPlayCircle />
          Demo
        </ButtonAlt>
        <Button appendClass="text-[18px] leading-[28px] px-7 py-4">
          Sign Up
        </Button>
      </div>

      <div className='max-h-[500px] relative overflow-hidden'>
        <div className='my-4 border-t-[20px] border-r-[15px] border-l-[15px] border-black rounded-[28px] relative bg-black'>
          <img src="/assets/landing.png" alt="document editor" />
        </div>
      </div>
    </section>
  );
}

const BadgeGroup = () => (
  <div className="flex relative gap-1 text-sm font-[500] bg-bgLight p-1 rounded-[16px] w-max">
    <div
      className={`px-[10px] py-[2px] rounded-[16px] text-linkPrimary bg-white hover:underline hover:cursor-pointer`}
    >
      New Feature
    </div>
    <div
      className={`px-[10px] py-[2px] rounded-[16px] text-linkPrimary hover:underline hover:cursor-pointer flex gap-2 items-center`}
    >
      Check out the team dashboard
      <FaArrowRight />
    </div>
  </div>
);
