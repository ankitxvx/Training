import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import useStyles from '../Form/style'
import Post from './Post/Post'
 
function Posts() {
  const classes = useStyles
  const posts = useSelector((state)=>state.posts)
   
  return (
     !posts.length ? <CircularProgress/>:(
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        { 
           posts.map((post)=>(
            <Grid key={posts._id} item xs = {12} sm = {6}>
               <Post post = {post}/>

            </Grid>
           ))

        }
      </Grid>
     )
  )
}

export default Posts