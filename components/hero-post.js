import { useEffect } from 'react' 
import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tag
}) {
  return (
    <section className="flex md:flex-row flex-col mt-16">
      <div className="md:w-2/3 mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:w-1/3 md:ml-10 mb-16 md:mb-20">
        <div className="mb-4">
          <h4 className="text-red-400 mb-2 text-xl lg:text-2xl leading-tight">
            <Link as={`/tags/${tag.slug}`} href="/tags/[slug]">
              <a className="hover:underline">{tag.name}</a>
            </Link>
          </h4>
          <h3 className="text-red-700 mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-gray-700 mb-4 md:mb-0 text-lg">
            <DateFormater dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.profile_image} />
        </div>
      </div>
    </section>
  )
}
