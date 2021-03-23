export const IS_NODE = typeof process !== 'undefined'
export const IN_BROWSER = typeof window !== 'undefined'
export const IS_DEBUG = IS_NODE && process.env.DEBUG === 'true'
export const IS_PROD = IS_NODE && process.env.NODE_ENV === 'production'
export const SUPPORTS_INTERSECTION = IN_BROWSER && 'IntersectionObserver' in window