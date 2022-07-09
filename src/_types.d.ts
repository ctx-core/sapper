export declare type Goto = (href:string, opts?:Goto_opts_T)=>Promise<void>;
export interface Goto_opts_T {
	noscroll:boolean;
	replaceState:boolean;
}
export declare type Goto_opts_type = Goto_opts_T;
export interface PageContext {
	host:string;
	path:string;
	params:PageParams;
	query:Query;
	error?:Error;
}
export type { PageContext as Page }
export declare type page_T = PageContext;
export declare type PageParams = Record<string, string>;
export declare type Query = Record<string, string|string[]>;
export declare type preload_T<Session extends object = object, Ret extends unknown = unknown> = (this:PreloadContext, page:page_T, session:Session)=>Promise<Ret>;
export interface PreloadContext {
	fetch:PreloadContext_fetch_T;
	error:PreloadContext_error_T;
	redirect:PreloadContext_redirect_T;
}
export declare type PreloadContext_fetch_T = (url:string, options?:any)=>Promise<any>;
export declare type PreloadContext_fetch_type = PreloadContext_fetch_T;
export declare type PreloadContext_error_T = (statusCode:number, message:Error|string)=>void;
export declare type PreloadContext_error_type = PreloadContext_error_T;
export declare type PreloadContext_redirect_T = (statusCode:number, location:string)=>void;
export declare type PreloadContext_redirect_type = PreloadContext_redirect_T;
export interface PreloadSession extends Record<string, any> {}
