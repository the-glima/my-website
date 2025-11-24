export interface WorkModel {
  title: string
  position: string
  url: string
  country: string
  year: string
  status?: string
  remote?: boolean
  hybrid?: boolean
  onSite?: boolean
}

export const WorkData = (t: any): WorkModel[] => [
  {
    title: 'Standard Giving',
    position: t('position.senior-front-end-developer'),
    country: t('countries.us'),
    year: '2024',
    url: 'https://www.standardgiving.com/',
    remote: true
  },
  {
    title: 'Medihive',
    position: t('position.senior-full-stack-developer'),
    country: t('countries.ireland'),
    year: '2023',
    url: 'https://www.medihive.com/',
    remote: true
  },
  {
    title: 'NexHealth',
    position: t('position.senior-front-end-developer'),
    country: t('countries.us'),
    year: '2021',
    url: 'https://www.nexhealth.com/',
    remote: true
  },
  {
    title: 'Payvision',
    position: t('position.full-stack-developer'),
    country: t('countries.spain'),
    year: '2019',
    url: 'https://www.payvision.com',
    hybrid: true
  },
  {
    title: 'Webdoctor',
    position: t('position.front-end-developer'),
    country: t('countries.ireland'),
    year: '2017',
    url: 'https://www.webdoctor.ie/',
    remote: true
  },
  {
    title: 'Neoway',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2015',
    url: 'https://www.neoway.com.br/',
    onSite: true
  },
  {
    title: 'EloGroup',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2013',
    url: 'https://elogroup.com.br/',
    onSite: true
  },
  {
    title: 'Bolt Brasil',
    position: t('position.ui-developer'),
    country: t('countries.brazil'),
    year: '2011',
    url: 'https://www.bolt.com.br/',
    onSite: true
  }
]
