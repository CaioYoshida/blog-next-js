import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import Newsletter from '../../components/newsletter'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { fetch } from 'cross-fetch'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <>
      <Header />
      <Layout preview={preview}>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32 mt-20">
                <Head>
                  <title>
                    {post.title}
                  </title>
                  <meta property="og:image" content={post.og_image} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.feature_image}
                  date={post.created_at}
                  author={post.primary_author}
                />
                <PostBody content={post.html} />
              </article>
            </>
          )}
        </Container>
      </Layout>
      <Newsletter actionPoint={500}/>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e`)
  const { posts } = await response.json()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const response = await fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/slug/${slug}/?key=42d888d8957b19a33c4a613c3e&include=authors`)
  const { posts } = await response.json()
  
  return {
    props: {
      post: posts[0],
    },
    unstable_revalidate: 60,
  }
}
