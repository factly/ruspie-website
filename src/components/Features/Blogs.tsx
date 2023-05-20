import { ButtonAlt } from '../Buttons';
import { FiArrowUpRight } from '@react-icons/all-files/fi/FiArrowUpRight';

const blogs: BlogItemProps[] = [
  {
    title: 'Building your API Stack',
    content:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: '/assets/blogs/image.jpg',
    date: '18 Jan 2022',
    author: 'Lana Steiner',
    tag: 'Design',
  },
  {
    title: 'Building your API Stack',
    content:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: '/assets/blogs/image.jpg',
    date: '18 Jan 2022',
    author: 'Lana Steiner',
    tag: 'Design',
  },
  {
    title: 'Building your API Stack',
    content:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: '/assets/blogs/image.jpg',
    date: '18 Jan 2022',
    author: 'Lana Steiner',
    tag: 'Design',
  },
  {
    title: 'Building your API Stack',
    content:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: '/assets/blogs/image.jpg',
    date: '18 Jan 2022',
    author: 'Lana Steiner',
    tag: 'Design',
  },
];

export default function Blogs() {
  return (
    <section className='px-16'>
      <Header />
      <div className="grid grid-cols-2 gap-8 gap-y-12 ">
        {blogs.map((blog) => (
          <BlogItem {...blog} />
        ))}
      </div>
    </section>
  );
}

const Header = () => (
  <div className="text-center flex flex-col gap-6 my-24">
    <h2 className="font-semibold text-foregroundStrong">Blogs</h2>
    <h1 className="text-[36px] font-semibold text-foregroundStrong">
      Anything you want to Read
    </h1>
    <p className="text-textLightPrimary text-[18px]">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
  </div>
);

const BlogItem = ({
  title,
  content,
  image,
  author,
  date,
  tag,
}: BlogItemProps) => (
  <div className="flex relative mx-auto flex-col gap-8 max-w-xl">
    <div className="relative overflow-hidden rounded-2xl max-h-[280px]">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="flex px-8 justify-between text-sm text-white  border-t-[1px] border-white/50 bg-white/30 w-full py-4 z-10 bottom-0 backdrop-blur-md absolute">
        <div>
          <div className="font-semibold mb-1">{author}</div>
          <div>{date}</div>
        </div>
        <div className="font-semibold">{tag}</div>
      </div>
    </div>
    <div>
      <div className="text-2xl font-semibold">{title}</div>
      <p className="text-textLightPrimary mt-2">
        The rise of RESTful APIs has been met by a rise in tools for creating,
        testing, and managing them.
      </p>
    </div>
    <div>
      <ButtonAlt appendClass="flex items-center gap-2">
        Read post
        <FiArrowUpRight />
      </ButtonAlt>
    </div>
  </div>
);

interface BlogItemProps {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tag: string;
}
