// See https://github.com/sveltejs/language-tools/issues/497
// TODO: Remove or alias when https://github.com/sveltejs/sapper/pull/1468 is released
export interface PreloadContext {
	fetch:PreloadContext_fetch_T
	error:PreloadContext_error_T
	redirect:PreloadContext_redirect_T
}
export type PreloadContext_fetch_T = (url:string, options?:any)=>Promise<any>
export type PreloadContext_fetch_type = PreloadContext_fetch_T
export type PreloadContext_error_T = (statusCode:number, message:Error|string)=>void
export type PreloadContext_error_type = PreloadContext_error_T
export type PreloadContext_redirect_T = (statusCode:number, location:string)=>void
export type PreloadContext_redirect_type = PreloadContext_redirect_T
