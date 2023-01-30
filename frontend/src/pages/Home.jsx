import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components';
import { TagsBlock } from '../components';
import { CommentBlock } from '../components';

export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Roast the code #1 | Rock Paper Scissors"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                fullName: 'Dick',
              }}
              createdAt={'15 января 2023 г.'}
              viewsCount={111}
              commentsCount={5}
              tags={['react', 'cool', 'js']}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['react', 'js', 'заметки']} isLoading={false} />
          <CommentBlock
            items={[
              {
                user: {
                  fullName: 'Вера Популярная',
                  avatarUrl: 'https://mui.com/static/images/avatar/4.jpg',
                },
              },

              {
                user: {
                  fullName: 'Надежда Прекрасная',
                  avatarUrl: 'https://mui.com/static/images/avatar/3.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};