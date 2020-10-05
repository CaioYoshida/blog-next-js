import { useEffect, useState } from 'react'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import About from '../components/about'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Newsletter from '../components/newsletter'
import Button from '../components/button'

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  
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
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <Newsletter />
      </Layout>
    </>
  )
}
