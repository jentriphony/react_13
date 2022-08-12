const urls = {
  // get: 'https://dummyjson.com/products?limit=5&select=title,description,price',
  // post: 'https://dummyjson.com/products/add'
  get: 'http://localhost:8000/api/list',
  post: 'http://localhost:8000/api/order/create'
}
const headers = {
  post: { 'Content-Type': 'application/json' }
}
const dataTails = {
  get: 'data'
}

const useFetch = () => {



  return async fetchProps => {
    fetchProps.feedback && fetchProps.feedback({
      data: null,
      isFetching: true
    })
    try {
      const method = fetchProps.method
      const responce = await fetch(urls[method], {
        method: method,
        headers: headers[method],
        body: JSON.stringify(fetchProps.body)
      })
      if(!responce.ok) {
        throw new Error(`error_${ method }`)
      }
      const data = await responce.json()
      const tail = dataTails[method]
      const resultData = tail ? data[tail] : data
      fetchProps.onSuccess ? fetchProps.onSuccess(resultData) : fetchProps.feedback({
        data: resultData,
        isFetching: false
      })
    } catch(error_) {
      fetchProps.feedback({
        data: { error: error_.message },
        isFetching: false
      })
    }
  }
  
  
  
}



export default useFetch
