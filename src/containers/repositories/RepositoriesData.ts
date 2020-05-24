export interface RepositoryModel {
  icon: string
  name: string
  url: string
  description: string
  status: 'done' | 'in-progress' | 'to-do'
}

export const RepositoriesData = (t: any): RepositoryModel[] => [
  {
    icon: '🍍',
    name: t('repositories.repos.website.title'),
    url: 'https://github.com/the-glima/my-website',
    description: t('repositories.repos.website.description'),
    status: 'done'
  },
  {
    icon: '🤖',
    name: 'PR Fiscal',
    url: 'https://github.com/the-glima/fiscal',
    description: t('repositories.repos.pr-fiscal-desc'),
    status: 'in-progress'
  },
  {
    icon: '🦨',
    name: 'Dale CLI',
    url: 'https://github.com/the-glima/dale-cli',
    description: t('repositories.repos.dale-cli'),
    status: 'in-progress'
  }
]
