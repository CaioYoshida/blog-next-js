import { useState, useEffect } from 'react'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { fetch } from 'cross-fetch'

import About from '../../components/about'
import LoadMoreStoriesButton from '../../components/loadMoreStoriesButton'
import Container from '../../components/container'
import Layout from '../../components/layout'
import MoreStories from '../../components/more-stories'
import Newsletter from '../../components/newsletter'

export default function Index({ post, lastsPosts, tagInformation }) {
  const router = useRouter();
  const [morePosts, setMorePosts] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)

  if (!router.isFallback && !lastsPosts) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=4&include=authors,tags&page=${page}&filter=tag:${router.query.slug}`).then(response => {
      response.json().then(data => {
        setNumberOfPages(data.meta.pagination.pages)
      })
    })
  }, [])

  const loadMorePosts = async () => {
    if (page >= numberOfPages) {
      return
    } else {
      fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=4&include=authors,tags&page=${page + 1}&filter=tag:${router.query.slug}`).then(response => {
        response.json().then(data => {
          setMorePosts([...morePosts, ...data.posts])
        })
      })
      setPage(page + 1)
    }
  }

  return (
    <>
      <Layout>
        <Head>
          {tagInformation && <title>{tagInformation.name}</title>}
        </Head>
        {<Container color="bg-red-100" containerId="more-stories">
          {lastsPosts && tagInformation && <MoreStories posts={lastsPosts} headlineTitle={tagInformation.name} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} hasHeadlineTitle={false} />}
          {page !== numberOfPages && 
            <LoadMoreStoriesButton onClick={loadMorePosts}/>
          }
        </Container>}
        <Container containerId="about">
          <About />
        </Container>
        <Newsletter />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/tags/?key=42d888d8957b19a33c4a613c3e`)
  const { tags } = await response.json()

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.slug,
        },
      }
    }),
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const { slug } = params
  const response = await fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=4&include=authors,tags&page=1&filter=tag:${slug}`)
  const { posts } = await response.json()

  return {
    props: {
      lastsPosts: posts,
      tagInformation: posts[0].primary_tag
    },
    unstable_revalidate: 60,
  }
}