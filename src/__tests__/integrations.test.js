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

it('can fetch a list of comments and display them', done => {
  // Render the entire App
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  )

  // Find the 'Fetch Comments' button and click it
  wrapper.find('.fetch-comments').simulate('click')

  // JEST does not handle below delay. So we use 'done'
  /* setTimeout(() => {
    wrapper.update()

    // Expect to find a list of comments
    expect(wrapper.find('li').length).toEqual(2)

    done()

    wrapper.unmount()
  }, 1000) */

  moxios.wait(() => {
    wrapper.update()

    expect(wrapper.find('li').length).toEqual(2)

    done()

    wrapper.unmount()
  })
})
