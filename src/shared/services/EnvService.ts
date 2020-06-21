const isDevelopment = (): Boolean => process.env.NODE_ENV === 'development'

export const envService = {
  isDevelopment
}
