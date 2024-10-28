import { format, parseISO } from 'date-fns';
import { ru, enUS, fr } from 'date-fns/locale'; // Импортируем локализацию для русского языка

export function formatDate(dateString, locale = 'ru') {
  const date = parseISO(dateString); // Парсим строку в объект даты
  const selectedLocale = locale === 'ru' ? ru : (locale === 'en'? enUS : fr);
  return format(date, 'd MMMM yyyy', { locale: selectedLocale });
}