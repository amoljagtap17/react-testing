import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
  wrapper = mount(<CommentBox />)
})

afterEach(() => {
  wrapper.unmount()
})

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

describe('the text area', () => {
  const text = 'some test comment'

  beforeEach(() => {
    wrapper.find('textarea').simulate('change', { target: { value: text } })

    // setState is async. Which means React does not re-renders the component at the very instance but queues up on the setState call. So force update needed here.

    wrapper.update()
  })

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(text)
  })

  it('when form is submitted, text area gets emptied', () => {
    wrapper.find('form').simulate('submit')

    wrapper.update()

    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})
