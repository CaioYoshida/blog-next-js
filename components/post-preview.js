import Link from 'next/link'
import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import UseVisibility from '../components/useVisibility'

import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tag
}) {
  return (
    <UseVisibility>
      <div className="p-6">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h4 className="text-red-400 mb-2 text-xl lg:text-2xl leading-tight">
          <Link as={`/tags/${tag.slug}`} href="/tags/[slug]">
            <a className="hover:underline">{tag.name}</a>
          </Link>
        </h4>
        <h3 className="text-red-700 text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-gray-700 text-lg mb-4">
          <DateFormater dateString={date} />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.profile_image} />
      </div>
    </UseVisibility>
  )
}
