import { IProjectPrivate } from '../../../../../types/Project'
import { type IDashboardData } from '../types'
import calculateActionsCurrentDate from './calculateActionsCurrentDate'

const createDataDashboard = (projects: IProjectPrivate[]): IDashboardData => ({
  likes: {
    all:
      projects.length > 0
        ? projects
            .map((project) => project.likes.length)
            .reduce((prev, current) => current + prev)
        : 0,
    currentDay:
      projects.length > 0
        ? projects
            .map((project) => calculateActionsCurrentDate(project.likes))
            .reduce((prev, curr) => curr + prev)
        : 0,
  },

  views: {
    all:
      projects.length > 0
        ? projects
            .map((project) => project.views.length)
            .reduce((prev, current) => current + prev)
        : 0,
    currentDay:
      projects.length > 0
        ? projects
            .map((project) => calculateActionsCurrentDate(project.views))
            .reduce((prev, curr) => curr + prev)
        : 0,
  },

  completedProjects: projects.filter((project) => project.websiteLink).length,

  devlopmentProjects:
    projects.length - projects.filter((project) => project.websiteLink).length,

  landingPages: projects.filter((project) => project.type === 'landing page')
    .length,

  webApps: projects.filter((project) => project.type === 'web app').length,

  ecommerces: projects.filter((project) => project.type === 'e-commerce')
    .length,
})

export default createDataDashboard
