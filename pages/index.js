import { useState, useEffect } from 'react'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import About from '../components/about'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Newsletter from '../components/newsletter'
import Button from '../components/button'
import fetch from 'cross-fetch'

export default function Index({ lastsPosts }) {
  const heroPost = lastsPosts[0]
  const [morePosts, setMorePosts] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)

  useEffect(() => {
    fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=5&include=authors&page=${page}`).then(response => {
      response.json().then(data => {
        setMorePosts(data.posts.slice(1))
        setNumberOfPages(data.meta.pages)
      })
    })
  }, [])

  const loadMorePosts = async () => {
    if (page >= numberOfPages) {
      return
    } else {
      fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=5&include=authors&page=${page + 1}`).then(response => {
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
        <Header />
        <div className="flex flex-col justify-center items-center">
          <img className="w-screen h-80vh lg:h-screen object-cover z-0" src={'assets/landing.jpg'} alt="landing image"/>
          <span className="text-6xl sm:text-8xl font-mono text-gray-900 absolute z-10">START:CODE</span>
        </div>
        <Container color="bg-gray-100" containerId="about">
          <About />
        </Container>
        <Container containerId="blog">
          {heroPost.primary_author && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.feature_image}
              date={heroPost.created_at}
              author={heroPost.primary_author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          {heroPost.primary_author && <Button onClick={loadMorePosts}>Load more posts</Button>}
        </Container>
        <Newsletter />
      </Layout>
    </>
  )
}

export const getStaticProps = async (context) => {
  const response = await fetch(`https://start-code-ghost.herokuapp.com/ghost/api/v3/content/posts/?key=42d888d8957b19a33c4a613c3e&limit=5&include=authors&page=1`)
  const { posts } = await response.json()

  return {
    props: { lastsPosts: posts },
  }
}
