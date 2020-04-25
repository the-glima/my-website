export interface JobModel {
  title: string
  position: string
  url: string
  country: string
  year: string
  status?: string
}

export const JobsData = (t: any): JobModel[] => [
  {
    title: 'Payvision',
    position: t('jobs.job.software-developer'),
    url: 'https://www.payvision.com',
    country: 'Spain',
    year: '2019',
    status: 'current'
  },
  {
    title: 'Webdoctor',
    position: t('jobs.job.software-developer'),
    year: '2017',
    country: 'Ireland',
    url: 'https://www.webdoctor.ie/'
  },
  {
    title: 'Neoway',
    position: t('jobs.job.javascript-developer'),
    country: 'Brazil',
    year: '2016',
    url: 'https://www.neoway.com.br/'
  },
  {
    title: 'Div64',
    position: t('jobs.job.front-end-developer'),
    country: 'Brazil',
    year: '2015',
    url: 'https://www.usebeon.com/'
  },
  {
    title: 'EloGroup',
    position: t('jobs.job.front-end-developer'),
    country: 'Brazil',
    year: '2013',
    url: 'https://elogroup.com.br/'
  },
  {
    title: 'Bolt Brasil',
    position: t('jobs.job.front-end-developer'),
    country: 'Brazil',
    year: '2011',
    url: 'https://www.bolt.com.br/'
  }
]
