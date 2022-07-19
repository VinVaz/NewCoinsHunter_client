import { Box, Grid, Typography } from '@mui/material'
import SEO from '@components/Seo'
import Hero from '@components/Section/Hero'
import Layout from '@components/Layout/MainLayout'
import FeedLayout from '@components/Layout/CategoriesLayout'
import PostCard from '@components/UIComponent/Card/PostCard'
import posts from '../data/posts'
import HeroActionButton from '@components/UIComponent/Button/HeroActionButton'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero
        headline={'Discover new crypto projects'}
        subheading={
          'Find the perfect project to invest before they explode in popularity'
        }
      >
        <HeroActionButton />
      </Hero>
      <FeedLayout>
        <Box id="posts">
          {posts?.length ? (
            <>
              <Grid container spacing={2}>
                {posts.map((post) => (
                  <Grid item xl={2.4} lg={3} sm={6} xs={12} key={post._id}>
                    <PostCard post={post} />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <Typography variant="h1">
                Uh oh! Something went wrong. Check out your internet connection.
              </Typography>
            </>
          )}
        </Box>
      </FeedLayout>
    </Layout>
  )
}
