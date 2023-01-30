import React from 'react';

import { Post } from '../components';
import { AddComment } from '../components';
import { CommentBlock } from '../components';

export const FullPost = () => {
  return (
    <>
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
        isFullPost>
        <p>
          Hey there! 👋 I'm starting a new series called "Roast the Code", where I will share some
          code, and let YOU roast and improve it. There's not much more to it, just be polite and
          constructive, this is an exercise so we can all learn together. Now then, head over to the
          repo and roast as hard as you can!!
        </p>
      </Post>
      <CommentBlock
        items={[
          {
            user: {
              fullName: 'Вера Популярная',
              avatarUrl: 'https://mui.com/static/images/avatar/4.jpg',
            },
            text: 'Это тест это тест если вы читаете это значит это тест)',
          },
          {
            user: {
              fullName: 'Надежда Прекрасная',
              avatarUrl: 'https://mui.com/static/images/avatar/3.jpg',
            },
            text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
          },
        ]}
        isLoading={false}>
        <AddComment />
      </CommentBlock>
    </>
  );
};
