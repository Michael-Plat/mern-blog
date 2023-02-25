import React from 'react';
import { useParams } from 'react-router-dom';

import axios from '../axios';
import { Post } from '../components';
import { AddComment } from '../components';
import { CommentBlock } from '../components';

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении статьи');
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }
  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
        // imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={{
          avatarUrl:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
          fullName: 'Keff',
        }}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={5}
        tags={data.tags}
        isFullPost>
        <p>{data.text}</p>
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
