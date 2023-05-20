import { Button } from '../Buttons';

export default function Landing() {
  return (
    <section className="px-16 mt-24">
      <div className="bg-bgLight py-16 flex flex-col items-center justify-center rounded-[24px] text-foregroundStrong gap-6 px-8">
        <h1 className="font-semibold text-[72px] leading-[90px] text-center">
          <div>Grow your users.</div>
          <div className="text-primary">Smarter.</div>
        </h1>
        <p className="text-[18px] text-center max-w-3xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <Button>
          Sign up for free
        </Button>
      </div>
    </section>
  );
}
