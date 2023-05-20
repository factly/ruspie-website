import { Button } from '../Buttons';
export default function Newsletter() {
  return (
    <div className="px-16 py-24 bg-[#F9FAFB] flex justify-between gap-8">
      <div>
        <div className="text-[#101828] font-semibold text-4xl">
          Sign up for our newsletter
        </div>
        <div className="text-[#475467] text-[20px] mt-4">
          Be the first to know about releases and industry news and insights.
        </div>
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <div className="flex justify-center items-center gap-4">
          <input
            className="bg-white px-4 py-2 outline-gray-200 rounded-[8px] shadow-sm"
            type="text"
            placeholder="Enter your email"
          />
          <Button>Subscribe</Button>
        </div>
        <span className="text-sm text-[#475467]">
          We care about your data in our{' '}
          <a href="#" className="underline">
            privacy policy.
          </a>
        </span>
      </div>
    </div>
  );
}
