import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Avatar, Paper} from '@mui/material';

const Page = async ({params}) => {
    const post = await getPost(params.postId);
    const comments = await getComments(params.postId);

  if (!post) {
    return (
      <Container>
        <Typography variant="h4">Post not Found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{minHeight: '100vh'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          minHeight: '30vh',
          borderRadius: '1rem',
          marginTop: '3rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textTransform: 'capitalize',
            fontSize: '2rem',
            padding: '0.5rem',
            color: '#154360',
          }}
        >
          {post.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
        }}
      >
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          lineHeight: '2.5',
        }}
      >
        <Typography
          sx={{
            textTransform: 'capitalize',
            fontSize: '1rem',
            padding: '1rem',
          }}
        >
          {post.body}
        </Typography>
      </Box>
      
      <Box sx={{p: 2, maxWidth: '100%', mx: 'auto', maxWidth: 'screen-sm'}}>
        <Paper sx={{p: 2, borderRadius: 1}}>
          <Typography
            variant="h6"
            mb={4}
            sx={{fontWeight: 'bold'}}
          >
            Comments
          </Typography>

          {comments.map((comment:any) => {
            return (
              <Box
                key={comment.id}
                sx={{display: 'flex', mb: 4}}
              >
                <Avatar
                  src="http://unavatar.io/logo"
                  sx={{mt: 2, width: 40, height: 40, mr: 3}}
                />
                <Box sx={{flex: 1, border: '1px solid #ddd', borderRadius: 1, p: 2}}>
                  <Typography
                    variant="subtitle1"
                    sx={{fontWeight: 'bold', textTransform: 'capitalize'}}
                  >
                    {comment.name}{' '}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{mt: 1}}
                  >
                    {comment.body}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{mt: 1, color: 'blue'}}
                  >
                    {comment.email}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Paper>
      </Box>
    </Container>
  );
};

export default Page;

async function getPost(params) {
    try {
      const postFetch = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`);
      if (!postFetch.ok) {
        throw new Error('Failed to fetch data');
      }
      const post = await postFetch.json();
      return post;
    } catch (error) {
      console.error(error);
      return {error: error.message};
    }
  }
  
  async function getComments(params) {
    try {
      const commentsFetch = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params}`);
      if (!commentsFetch.ok) {
        throw new Error('Failed to fetch Comments');
      }
      const comments = await commentsFetch.json();
      return comments;
    } catch (error) {
      console.error(error);
      return {error: error.message};
    }
  }



