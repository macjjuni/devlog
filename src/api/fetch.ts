// type MethodTypes = 'get' | 'post'

const Fetch = (url: string) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

export default Fetch
