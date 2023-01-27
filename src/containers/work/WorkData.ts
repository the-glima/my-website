export interface WorkModel {
  title: string
  position: string
  url: string
  country: string
  year: string
  status?: string
  remote?: boolean
}

export const WorkData = (t: any): WorkModel[] => [
  {
    title: 'NexHealth',
    position: t('position.senior-front-end-developer'),
    country: t('countries.brazil'),
    year: '2021',
    url: 'https://www.nexhealth.com/',
    remote: true
  },
  {
    title: 'Ciklum',
    position: t('position.senior-front-end-developer'),
    country: t('countries.spain'),
    year: '2020',
    url: 'https://www.ciklum.com/',
    remote: true
  },
  {
    title: 'Payvision',
    position: t('position.software-developer'),
    country: t('countries.spain'),
    year: '2019',
    url: 'https://www.payvision.com'
  },
  {
    title: 'Webdoctor',
    position: t('position.software-developer'),
    country: t('countries.ireland'),
    year: '2017',
    url: 'https://www.webdoctor.ie/',
    remote: true
  },
  {
    title: 'Neoway',
    position: t('position.javascript-developer'),
    country: t('countries.brazil'),
    year: '2016',
    url: 'https://www.neoway.com.br/'
  },
  {
    title: 'Div64',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2015',
    url: 'https://www.usebeon.com/'
  },
  {
    title: 'EloGroup',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2013',
    url: 'https://elogroup.com.br/'
  },
  {
    title: 'Bolt Brasil',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2011',
    url: 'https://www.bolt.com.br/'
  }
]
