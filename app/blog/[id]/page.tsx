import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const respone = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return respone.json();
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

const page = async ({ params: { id } }: Props) => {
  const post = await getData(id);
  return (
    <>
      <div>{post.title}</div>
      <p>{post.body}</p>
    </>
  );
};

export default page;
