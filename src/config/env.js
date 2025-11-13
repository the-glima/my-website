const config = {
  mode: import.meta.env.VITE_MODE || 'production',
  baseurl: import.meta.env.VITE_API_BASE_URL,
  ghToken: import.meta.env.VITE_GH_TOKEN,
  ghUser: import.meta.env.VITE_GH_USER
}

export default config
