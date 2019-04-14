import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()

  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched Comment #1' }, { name: 'Fetched Comment #2' }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', () => {
  // Render the entire App
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  )

  // Find the 'Fetch Comments' button and click it
  wrapper.find('.fetch-comments').simulate('click')

  // Expect to find a list of comments
  expect(wrapper.find('li').length).toEqual(2)
})
