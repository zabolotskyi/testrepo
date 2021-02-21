import React from 'react'
import styled from '@emotion/styled'

const StyledPost = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  margin: 0 2rem 2rem 0;
  transition: all 0.5s;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #eaf3fd;
  }

  p {
    margin-bottom: 0.5rem;
  }
`

const StyledImage = styled.div`
  display: flex;
  align-items: flex-end;
  background: url(${(props) => props.bgUrl});
  background-size: cover;
  width: 100%;
  height: ${(props) => props.height};
  color: #fff;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 0.7rem;
    height: 2rem;
    background: ${(props) => props.bgc};
  }
`

const StyledSubtitle = styled.div`
  display: flex;
  color: #b0b0b0;
  font-size: 0.7rem;
  padding-bottom: 0.7rem;
`

const postBodyStyle = {
  zIndex: '1',
  position: 'absolute',
  bottom: '1.7rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 10rem',
  color: '#fff',
  fontSize: '1.8rem',
  textAlign: 'center',
}

const postSubtitleStyle = {
  alignSelf: 'flex-end',
  margin: '1rem -8rem 0 0',
}

const Post = ({ node }) => {
  const { author, body, categories, date, dimension, title } = node.data
  const category = categories[0].category.document[0].data
  const postAuthor = author.document[0].data.body[0].primary

  const getPostSize = () => {
    switch (dimension) {
      case 1:
        return {
          width: '66.6rem',
          height: '22.2rem',
        }
      case 2:
        return {
          width: '31.3rem',
          height: '14.4rem',
        }
      default:
        return {
          width: '20.2rem',
          height: '13.8rem',
        }
    }
  }

  const getPostBodyStyle = () => (dimension === 1 ? postBodyStyle : {})
  const getPostSubtitleStyle = () => (dimension === 1 ? postSubtitleStyle : {})

  const image = body.filter((s) => s.slice_type === 'image')

  return (
    <StyledPost href="#" width={getPostSize().width}>
      <StyledImage bgUrl={image[0].primary.image.url} height={getPostSize().height} bgc={category.color}>
        <div>{category.name}</div>
      </StyledImage>
      <div style={getPostBodyStyle()}>
        <p>{title.text}</p>
        <StyledSubtitle style={getPostSubtitleStyle()}>
          {date} | &nbsp;
          <a href={postAuthor.link.url}>{postAuthor.label.text}</a>
        </StyledSubtitle>
      </div>
    </StyledPost>
  )
}

export default Post

// PropTypes here
