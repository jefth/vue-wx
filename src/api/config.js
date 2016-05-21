export const API_ROOT = (process.env.NODE_ENV === 'production')
			? 'http://localhost/'
			:'http://localhost/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
			? '.jackhu.top'
			:''