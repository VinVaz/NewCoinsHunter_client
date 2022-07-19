import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import {
  Card,
  Badge,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardActions
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { red } from '@mui/material/colors'

const PostCard = ({ post }) => {
  const [imgHeight, setImgHeight] = useState(190)
  const [imgWidth, setImgWidth] = useState(0)

  useEffect(() => {
    setImgWidth((2 * imgHeight) / 3)
  }, [imgHeight])
  return (
    <Card variant="outlined">
      <NextLink href={`/profile/${post.author.username}`}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="makeup"
              src={post.author.avatarUrl}
              alt={post.author.username ? post.author.username : 'User'}
            >
              {String(post.author.username).charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader={'custom subheader'}
        />
      </NextLink>
      <NextLink href={`/makeups/${post.title}`} passHref>
        <CardMedia
          component="img"
          height={`${imgHeight}px`}
          width={`${imgWidth}px`}
          image={`\\${post.media.urls[0]}`}
          alt="Website banner"
        />
      </NextLink>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Badge badgeContent={post.upvoteCount} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="share">
          <Badge badgeContent={post.viewCount} color="error">
            <VisibilityIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard
