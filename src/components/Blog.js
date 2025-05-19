import React from 'react';
import styled from 'styled-components';
import { blogArticles } from '../data/blogData';
import { Link } from 'react-router-dom';

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const BlogPost = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 180px;
  height: 140px;
  object-fit: cover;
`;

const PostContent = styled.div`
  flex: 1;
  padding: 18px 24px;
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.3em;
`;

const Excerpt = styled.p`
  margin: 0 0 12px 0;
  color: #444;
`;

const Date = styled.div`
  font-size: 0.95em;
  color: #888;
  margin-bottom: 8px;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  background: #3498db;
  color: #fff;
  padding: 8px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 8px;
  &:hover {
    background: #217dbb;
  }
`;

const Blog = () => (
      <BlogList>
    {blogArticles.map(article => (
      <BlogPost key={article.id}>
        <Thumbnail src={article.image} alt={article.title} />
        <PostContent>
          <Date>{article.date} {article.author && <>| {article.author}</>}</Date>
          <Title>{article.title}</Title>
          <Excerpt>{article.excerpt}</Excerpt>
          <ReadMore to={`/blog/${article.slug}`}>Lire la suite</ReadMore>
        </PostContent>
          </BlogPost>
        ))}
      </BlogList>
  );

export default Blog;

