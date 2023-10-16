import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useParams,
    useNavigate,
} from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

import { CardActions, CardMedia, Button } from '@mui/material';

function PostCard({ post, onDeletePost }) {
    return (
        <Card
            sx={{
                maxWidth: 300,
                ml: 6,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 1)',
            }}>
            <CardMedia
                sx={{ height: 240 }}
                image='https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=1060&t=st=1697467990~exp=1697468590~hmac=7895900b5f9b93387db9505d4348b30781d7c86702fd439100f4d5532394737b'
                title={post.title}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {post.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    size='small'
                    component={Link}
                    to={`/posts/${post.id}/edit`}>
                    Edit
                </Button>
                <Button size='small' component={Link} to={`/posts/${post.id}`}>
                    Comment
                </Button>
                <Tooltip title='Delete' arrow>
                    <IconButton>
                        <DeleteIcon onClick={() => onDeletePost(post.id)} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default function HomePage({ posts, onDeletePost }) {
    return (
        <Grid container spacing={2}>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <PostCard post={post} onDeletePost={onDeletePost} />
                </Grid>
            ))}
        </Grid>
    );
}
