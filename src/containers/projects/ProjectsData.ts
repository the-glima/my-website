export interface ProjectModel {
  favicon: string
  name: string
  url: string
  description: string
  status: 'done' | 'in-progress' | 'to-do'
}

export const ProjectsData = (t: any): ProjectModel[] => [
  {
    name: 'NexHealth',
    favicon: 'https://assets.website-files.com/62f7955338a7286dd4b633cc/6384d406d54e4266fa6690a3_NexHealth-Webclip.png',
    url: 'https://www.nexhealth.com/',
    description: t('projects.links.nexhealth'),
    status: 'done'
  },
  {
    name: t('projects.links.website.title'),
    favicon: 'https://gabriel-lima.com/favicon.ico',
    url: 'https://github.com/the-glima/my-website',
    description: t('projects.links.website.description'),
    status: 'done'
  },
  {
    name: 'Ciklum',
    favicon: 'https://www.ciklum.com/hubfs/CIKLUM%20FAVICON.png',
    url: 'https://www.ciklum.com/',
    description: t('projects.links.ciklum'),
    status: 'done'
  }
  // {
  //   name: 'Has Health',
  //   favicon: 'https://www.hashealth.com/wp-content/uploads/2020/11/cropped-hashealth-favicon-2-32x32.png',
  //   url: 'https://www.hashealth.com/',
  //   description: t('projects.links.has-health'),
  //   status: 'done'
  // }
]
