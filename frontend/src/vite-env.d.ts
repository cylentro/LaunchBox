/// <reference types="vite/client" />

// You can declare your environment variables here for autocompletion and type safety
interface ImportMetaEnv {
  readonly VITE_API_HOST : string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}