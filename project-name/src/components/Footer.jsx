import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 15rem;

  div {
    margin-top: 3rem;
    color: #a7acbc;
    text-align: center;

    a {
      text-decoration: none;
      color: gray;
      font-weight: bold;
    }
  }
`

const Footer = ({ data }) => {
  // createMarkup can be extracted to utils. It's used 2 times in the app.
  const createMarkup = () => ({ __html: data })

  return (
    <StyledFooter>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </StyledFooter>
  )
}

export default Footer
