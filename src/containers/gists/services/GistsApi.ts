import {envService} from '../../../shared/services/EnvService'
import {APIService} from 'shared/services/APIService'
import {GitHubAPIEnum} from '../models/GithubAPIEnum'

const getHeaders = (headersParams = {}) => ({
  ...(envService.isDevelopment() && {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GH_TOKEN}`,
      ...headersParams
    }
  })
})

const getCollectionUrl = (params = GitHubAPIEnum): string =>
  `${params.url}/users/${params.user}/gists?per_page=${params.perPage}`

const getLogosUrl = (params = GitHubAPIEnum): string => `${params.url}/gists/${params.gistTechLogosId}`

const fetchGists = async () => {
  const headers = getHeaders()
  const collectionURL = getCollectionUrl()
  const [collectionData, collectionError] = await APIService.handlePromise(fetch(collectionURL, headers))

  if (collectionError) return collectionError

  const logosURL = getLogosUrl()
  const [logosData] = await APIService.handlePromise(fetch(logosURL, headers))

  return {
    collection: collectionData,
    logos: logosData
  }
}

export const GistsApi = {
  fetchGists
}
