export interface RepositoryModel {
  icon: string
  name: string
  url: string
  description: string
}

export const RepositoriesData = (t: any): RepositoryModel[] => [
  {
    icon: '🍍',
    name: t('repositories.repos.website.title'),
    url: 'https://github.com/the-glima/my-website',
    description: t('repositories.repos.website.description')
  },
  {
    icon: '🤖',
    name: 'PR Fiscal',
    url: 'https://www.gabriel-lima.com',
    description: t('repositories.repos.pr-fiscal-desc')
  },
  {
    icon: '🦨',
    name: 'Dale CLI',
    url: 'https://www.gabriel-lima.com',
    description: t('repositories.repos.dale-cli')
  }
]
