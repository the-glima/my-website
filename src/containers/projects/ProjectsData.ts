export interface ProjectModel {
  favicon: string
  name: string
  url: string
  description: string
  status: 'done' | 'in-progress' | 'to-do'
}

export const ProjectsData = (t: any): ProjectModel[] => [
  {
    name: t('projects.links.website.title'),
    favicon: 'http://localhost:3000/favicon.ico',
    url: 'https://github.com/the-glima/my-website',
    description: t('projects.links.website.description'),
    status: 'done'
  },
  {
    name: 'Has Health',
    favicon: 'https://www.hashealth.com/wp-content/uploads/2020/11/cropped-hashealth-favicon-2-32x32.png',
    url: 'https://www.hashealth.com/',
    description: t('projects.links.has-health'),
    status: 'done'
  },
  {
    name: 'Payvision',
    favicon: 'https://www.payvision.com/assets/icons/favicons/favicon-64.png',
    url: 'https://www.payvision.com/',
    description: t('projects.links.payvision'),
    status: 'done'
  },
  {
    name: 'Lottoland',
    favicon: 'https://www.lottoland.com/en/skins/lottoland/images/ui/favicon-906cd6ceee89e2b3.ico',
    url: 'https://www.lottoland.com/en',
    description: t('projects.links.lottoland'),
    status: 'done'
  }
]
