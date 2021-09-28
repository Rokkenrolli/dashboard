import { Project } from '.prisma/client'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {  getPublishedProjects } from './api/dashboard'
import { Card } from '../components/card'

const Home: NextPage = ({projects}: InferGetStaticPropsType<typeof getStaticProps>) => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Dashboard</title>
        <meta name="description" content="Welcome to my page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my page
        </h1>


        {(projects as Project[]).map((project) => {
          return(
          <Card {...project} />
          )
        })}
        
        <Card id={0} title={'About Me'} description={'Here you will more about me'} published={true} url={'me'} tags={["dev","info", "hello :)"]} />
      </main>

    </div>
  )
}

export const getStaticProps:GetStaticProps  = async () => {
  const projects = await getPublishedProjects()
 return {props: {projects}}
}

export default Home
