import { useState, useEffect } from 'react'
import jsonplaceholderAPI from 'apis/jsonplaceholderAPI'

const useResources = resource => {
  const [resources, setResources] = useState([])

  const fetchResource = async () => {
    const response = await jsonplaceholderAPI.get(`/${resource}`)

    setResources(response.data)
  }

  useEffect(() => {
    fetchResource()
  }, [resource])

  return resources
}

export default useResources
