import Link from 'next/link';
import ImageWithTheme from 'components/ImageWithTheme';
import Image from 'next/future/image';

const NextImage = (props) => {
  return (
    <Image
      width={672}
      height={400}
      alt={props.alt}
      src={props.src}
      loading="lazy"
    />
  );
};

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  ImageWithTheme,
  img: NextImage
};

export default MDXComponents;
