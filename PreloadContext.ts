// See https://github.com/sveltejs/language-tools/issues/497
// TODO: Remove or alias when https://github.com/sveltejs/sapper/pull/1468 is released
export interface PreloadContext {
	fetch:(url:string, options?:any)=>Promise<any>;
	error:(statusCode:number, message:Error|string)=>void;
	redirect:(statusCode:number, location:string)=>void;
}
