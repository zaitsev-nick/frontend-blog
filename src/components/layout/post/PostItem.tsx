import ShareButtons from '@/components/share/ShareButtons';
import { PostType } from '@/types/types';
import styles from './PostItem.module.scss';
import cx from 'classnames';
import parse from 'html-react-parser';


export function PostItem({ props }: { props: PostType }) {
  const { image, title, description, text, id, createdAt, tags, likes } = props;

  return (
  <article className="relative mt-5">

    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" >
      <img src={image} className=" left-0 top-0 w-full h-full z-0 object-cover" />
      <h1 className="mt-5 text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
        {title}
      </h1>
    </div>

    <div className="px-4 lg:px-0 mt-6 text-gray-800 max-w-screen-md mx-auto text-xl leading-relaxed">
      {description}
    </div>

    <hr className="mt-5 border-gray-300" />

    <div className={cx(styles.article, "px-4 lg:px-0 mt-6 text-gray-800 max-w-screen-md mx-auto text-lg leading-relaxed")}>
      {parse(text)}
    </div>
  </article>
  )
}