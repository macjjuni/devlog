// type MethodTypes = 'get' | 'post'

const Fetch = (url: string) => {
  const res = fetch(url)
    .then((response) => response.json())
    .then((data) => data)
  return res
}

export default Fetch
