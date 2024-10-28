import config from '../config'
export const useDomain = (link) => {
    return (config.drupal_url + link);
}