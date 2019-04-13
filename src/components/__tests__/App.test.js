import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

// We could have named this file just App.js

it('shows a comment box', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(CommentList)).toHaveLength(1)
})
