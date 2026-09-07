import { LanguageContext } from '@src/contexts/language.context';
import { useContext } from 'react';

export const useLanguage = () => useContext(LanguageContext);
