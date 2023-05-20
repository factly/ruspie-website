import { Button, ButtonAlt } from '../Buttons';

export default function Trial() {
  return (
    <section className="my-36 px-16">
      <div className="py-24 px-8 bg-[#F9FAFB] rounded-[44px] flex gap-12">
        <div className="flex flex-col gap-4 basis-1/2 justify-center">
          <div className="text-[48px] text-[#101828] leading-[60px] font-semibold">
            No long-term contracts.No catches.
          </div>
          <div className="text-textLightPrimary text-[20px] leading-[30px]">
            Start your 30-day free trial today.
          </div>
          <div className="flex gap-4">
            <ButtonAlt appendClass="border-[1px]">Learn more</ButtonAlt>
            <Button>Get started</Button>
          </div>
        </div>
        <div className='basis-1/2'>
          <div className='flex justify-center items-end gap-4'>
            <img src="/assets/trial/image1.png" alt="trial" />
            <img src="/assets/trial/image2.png" alt="trial" />
          </div>
          <div className='mt-4 flex gap-4 justify-center items-start'>
            <img src="/assets/trial/image3.png" alt="trial" />
            <img src="/assets/trial/image4.png" alt="trial" />
            <img src="/assets/trial/image5.png" alt="trial" />
          </div>
        </div>
      </div>
    </section>
  );
}
