import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Icon from '../components/icon'
import { capitalizeString } from '../utils/helpers'
import colors from '../utils/colors'

const ListContainer = styled.ul`
  display: block;
  margin: 0;
  margin-bottom: 2rem;
`

const CommentContainer = styled.li`
  display: block;
  margin-bottom: 1rem;
`

const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`

const CommentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  color: ${colors.grey};
  background: ${colors.background};
  font-size: 28px;
  font-weight: 400;
  overflow: hidden;
`

const CommentTitle = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentMessage = styled.div`
  display: block;
`

const Comment = ({ author, time, message }) => {
  const date = moment(time * 1000).format("D MMM 'YY")
  author = capitalizeString(author)
  const initial = author.charAt(0)

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentIcon>
          <span>{initial}</span>
        </CommentIcon>
        <CommentTitle>
          <strong>{author}</strong>
          {date}
        </CommentTitle>
      </CommentHeader>
      <CommentMessage>{message}</CommentMessage>
    </CommentContainer>
  )
}

const CommentList = ({ comments }) => {
  comments = comments.map(({ node }, i) => (
    <Comment
      key={i}
      author={node.name}
      time={node.date}
      message={node.message}
    />
  ))

  return (
    <ListContainer>
      <h2>
        {comments && comments.length} Comment{comments.length > 1 && 's'}
      </h2>
      {comments}
    </ListContainer>
  )
}

export default CommentList
