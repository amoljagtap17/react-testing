import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapper

beforeEach(() => {
  const initialValue = {
    comments: ['Comment 1', 'Comment 2']
  }

  wrapper = mount(
    <Root initialValue={initialValue}>
      <CommentList />
    </Root>
  )
})

it('creates one LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {})
