import Link from 'next/link';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

async function getPosts() {
  const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!postsFetch.ok) {
    throw new Error('Failed to fetch data');
  }
  const posts = await postsFetch.json();
  return posts;
}

export default async function Blog()  {
  const data = await getPosts();

  return (
    <Container
      maxWidth="lg"
      sx={{py: 6, minHeight: '100vh'}}
    >
      <Grid
        container
        spacing={4}
      >
        {data.map((post:any) => (
          <Grid
            item
            xs={12}
            md={12}
            key={post.id}
          >
            <Card sx={{display: 'flex', alignItems: 'center', boxShadow: 'none'}}>
              <CardContent sx={{flex: 1}}>
                <Typography
                  variant="h5"
                  component={Link}
                  href={`posts/${post.id}`}
                  sx={{
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': {color: '#1B4F72'},
                    textTransform: 'capitalize',
                  }}
                >
                  {post.title}
                </Typography>
                <Box
                  // dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substring(0, 200)}}
                  sx={{my: 2}}
                >
                  <Typography>{post.body}</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mt: 2}}>
                  <Button
                    component={Link}
                    href={`posts/${post.id}`}
                    variant="text"
                    sx={{color: '#1B4F72'}}
                    endIcon={
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

