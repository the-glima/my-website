export type ILanguage = {
  label: string;
  key: 'en' | 'pt' | 'es';
  default?: boolean;
};

export const LanguageData: ILanguage[] = [
  {
    label: 'English',
    key: 'en',
    default: true
  },
  {
    label: 'Portuguese',
    key: 'pt'
  },
  {
    label: 'Spanish',
    key: 'es'
  }
];
