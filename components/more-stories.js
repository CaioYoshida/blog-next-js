import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, headlineTitle = "More Stories", moreStoriesClassName, hasHeadlineTitle = true }) {
  return (
    <section className={`${moreStoriesClassName}`}>
      {hasHeadlineTitle && <h2 className={`mb-8 font-lobster text-orange-500 text-4xl md:text-6xl font-bold tracking-tighter leading-tight`}>
        {headlineTitle}
      </h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 lg:col-gap-16 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.feature_image}
            date={post.created_at}
            author={post.primary_author}
            slug={post.slug}
            excerpt={post.excerpt}
            tag={post.primary_tag}
          />
        ))}
      </div>
    </section>
  )
}
