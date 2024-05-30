import React from 'react'
import useStyles from './Style'
import {ThumbUpAlt,Delete,MoreHoriz} from '@mui/icons-material'
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography,CardActions } from '@mui/material';
import moment from 'moment'
function Post({post}) {
    const classes = useStyles();
  return (
      <Card>
        <CardMedia className={classes.media} image={post.selectedFile} title= {post.title}/>
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.creator}</Typography>
          <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{color:'white'}} size='small' onClick = {()=>{}}>
            <MoreHoriz fontSize='default'/>
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant='body2' color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
        </div>
        <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions className ={classes.cardActions}>
          <Button size='small' color= "primary" onClick={()=>{}}>
             <ThumbUpAlt fontSize='small'>
              Like
              {post.likeCount}
             </ThumbUpAlt>
          </Button>
          <Button size='small' color= "primary" onClick={()=>{}}>
             <Delete fontSize='small'/>
              Delete
              
          </Button>
        </CardActions>
      </Card>
  )
}

export default Post