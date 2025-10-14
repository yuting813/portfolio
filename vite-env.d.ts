/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIL_API?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
