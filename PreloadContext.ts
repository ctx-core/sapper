// See https://github.com/sveltejs/language-tools/issues/497
// TODO: Remove or alias when https://github.com/sveltejs/sapper/pull/1468 is released
export interface PreloadContext {
	fetch:PreloadContext_fetch_type
	error:PreloadContext_error_type
	redirect:PreloadContext_redirect_type
}
export type PreloadContext_fetch_type = (url:string, options?:any)=>Promise<any>
export type PreloadContext_error_type = (statusCode:number, message:Error|string)=>void
export type PreloadContext_redirect_type = (statusCode:number, location:string)=>void
