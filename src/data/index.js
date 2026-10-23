const siteModules = import.meta.glob('./sites/*.json', { eager: true, import: 'default' });
const institutionModules = import.meta.glob('./institutions/*.json', { eager: true, import: 'default' });
const newsModules = import.meta.glob('./news/*.json', { eager: true, import: 'default' });
export const sites = Object.values(siteModules).sort((a,b)=>a.name.localeCompare(b.name));
export const institutions = Object.values(institutionModules).sort((a,b)=>a.name.localeCompare(b.name));
export const news = Object.values(newsModules).sort((a,b)=>b.date.localeCompare(a.date));
export const pathFor = (path='') => `${import.meta.env.BASE_URL.replace(/\/$/,'')}/${path.replace(/^\//,'')}`;
