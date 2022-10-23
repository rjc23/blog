import Image from 'next/image';
import Link from 'next/link';
import readingTime from 'reading-time';

export default function LatestPosts({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((val, i) => {
        const options: any = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        const createdAt = new Date(val.attributes.createdAt).toLocaleDateString(
          [],
          options
        );
        return (
          <div
            className="bg-white shadow-md rounded-lg dark:bg-gray-800"
            key={i}
          >
            <Link href={'/blog/' + val.attributes.urlSlug}>
              <a>
                <div className="imageContainer mb-2">
                  <Image
                    src={val.attributes.socialImage?.data?.attributes.url}
                    layout="fill"
                    alt={val.attributes.socialImage?.data?.attributes.caption}
                    className="image rounded-tl-lg rounded-tr-lg"
                    quality={1}
                    priority
                  ></Image>
                </div>
              </a>
            </Link>
            <div className="p-4 pb-8">
              <Link href={'/blog/' + val.attributes.urlSlug}>
                <a>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    {readingTime(val.attributes.content).text} - {createdAt}
                  </div>
                  <h3 className="mb-3">{val.attributes.heading}</h3>
                </a>
              </Link>
              <div>
                {val.attributes.tag?.data.map((tag, i) => {
                  return (
                    <Link href={`/category/${tag.attributes.tagName}`} key={i}>
                      <a className="mr-2 bg-gray-200 dark:bg-gray-600 p-px pr-1 pl-1 rounded-sm">
                        #{tag.attributes.tagName}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
