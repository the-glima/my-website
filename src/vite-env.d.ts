/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: string
  readonly VITE_GH_TOKEN: string
  readonly VITE_GH_USER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
