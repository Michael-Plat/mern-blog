import React from 'react';
import ReactMarkdown from 'react-markdown';
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
        imageUrl={`http://localhost:4444${data.imageUrl}`}
        user={{
          avatarUrl: data.user.avatarUrl,
          fullName: data.user.fullName,
        }}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={5}
        tags={data.tags}
        isFullPost>
        <ReactMarkdown children={data.text} />
        {/* <p>{data.text}</p> */}
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
