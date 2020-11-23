import { useState, useEffect } from 'react'
import fetch from 'cross-fetch'
import Head from 'next/head'
import AdSense from 'react-adsense'

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import About from '../components/about'
import Newsletter from '../components/newsletter'
import LoadMoreStoriesButton from '../components/loadMoreStoriesButton'
import AdBanner from '../components/adBanner'
import { CMS_NAME } from '../lib/constants'

export default function Index({ lastsPosts }) {
  const heroPost = lastsPosts[0]
  const [morePosts, setMorePosts] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)

  useEffect(() => {
    fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=5&include=authors,tags&page=${page}`).then(response => {
      response.json().then(data => {
        setNumberOfPages(data.meta.pagination.pages)
      })
    })
  }, [])

  const loadMorePosts = async () => {
    if (page >= numberOfPages) {
      return
    } else {
      fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=5&include=authors,tags&page=${page + 1}`).then(response => {
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
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container containerId="blog">
          {heroPost.primary_author && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.feature_image}
              date={heroPost.created_at}
              author={heroPost.primary_author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tag={heroPost.primary_tag}
            />
          )}
        </Container>
        <Container color="bg-red-100" containerId="more-stories">
          {lastsPosts.length > 0 && <MoreStories posts={lastsPosts.slice(1)} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} hasHeadlineTitle={false} />}
          {page !== numberOfPages && 
            <LoadMoreStoriesButton onClick={loadMorePosts}/>
          }
        </Container>
        <Container containerId="about">
          <About />
          <AdBanner slotId='1061687698' width={728} height={90}/>
        </Container>
        <Newsletter />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=5&include=authors,tags&page=1`)
  const { posts } = await response.json()

  return {
    props: { lastsPosts: posts },
  }
}
