declare module 'ApiTypes' {
  export interface TRequestOptions {
  method: string,
  headers: any,
  redirect: "error" | "follow" | "manual",
  body?: string,
  }
}