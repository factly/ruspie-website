import { Button } from './Buttons';

export default function Landing() {
  return (
    <section className="px-16 my-36">
      <div className="bg-bgLight py-16 flex flex-col items-center justify-center rounded-[24px] text-foregroundStrong gap-6 px-8">
        <div>
          <img src="/assets/logo.svg" alt="Ruspie logo" />
        </div>
        <p className='text-[20px] font-semibold'>Still have questions?</p>
        <p className="text-[18px] text-center max-w-3xl">
        Just Sign up free and get to know about our product more!
        </p>
        <Button>
          Sign up
        </Button>
      </div>
    </section>
  );
}
