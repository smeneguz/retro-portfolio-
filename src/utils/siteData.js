import siteConfig from '../config/siteConfig.json';
import publications from '../config/publications.json';
import projectsData from '../config/projects.json';
import blogData from '../config/blog.json';

export const getSiteConfig = () => siteConfig;
export const getPublications = () => publications.publications;
export const getTalks = () => publications.talks;
export const getEducation = () => siteConfig.education;
export const getExperience = () => siteConfig.experience;
export const getSkills = () => siteConfig.skills;
export const getResearchInterests = () => siteConfig.researchInterests;
export const getPersonalInfo = () => siteConfig.personal;
export const getSocialLinks = () => siteConfig.social;
export const getProjects = () => projectsData.projects;
export const getBlogPosts = () => blogData.posts;
export const getBlogCategories = () => blogData.categories;
