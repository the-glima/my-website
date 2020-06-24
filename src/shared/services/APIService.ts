const handlePromise = (promise: Promise<any>) => {
  return promise
    .then((data) => data.json())
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]))
}

export const APIService = {
  handlePromise
}
