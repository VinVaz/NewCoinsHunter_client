import { Box, Grid, Typography } from '@mui/material'
import Layout from '../components/Layout/MainLayout'
import FeedLayout from '../components/Layout/CategoriesLayout'
import PostCard from '../components/Card/PostCard'
import posts from '../data/posts'

export default function Home(props) {
  return (
    <Layout>
      <FeedLayout>
        <Box id="posts">
          {posts.length ? (
            <>
              <Box
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {posts.map((post) => (
                  <Box key={post._id} sx={{ my: '1rem' }}>
                    <PostCard post={post} />
                  </Box>
                ))}
              </Box>
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
