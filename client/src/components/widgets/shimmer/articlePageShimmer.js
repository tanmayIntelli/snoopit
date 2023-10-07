import React from 'react'
import './articlePageShimmer.css'
import { Box } from '@mui/material'

const ArticlePageShimmer = () => {
  return (
    <Box sx={{
      width: {
        xs: '90vw',
        sm: '80vw',
        md: '70vw',
        lg: '60vw',
      },
    }}
    className='shimmer-article'>
      <Box sx={{
      width: {
        xs: '80vw',
        sm: '70vw',
        md: '60vw',
        lg: '50vw',
      },
    }} className='shimmer-title'></Box>
      <Box sx={{
      width: {
        xs: '80vw',
        sm: '70vw',
        md: '60vw',
        lg: '50vw',
      },
    }} className='shimmer-text'></Box>
    </Box>
  )
}

export default ArticlePageShimmer