import type { Response } from 'express'
/**
 * GET asset
 */
export declare function asset__http_get(opts:asset__http_get_opts_T):(_:any, res:Response)=>Promise<void>;
export interface asset__http_get_opts_T {
	asset_key:string;
	root_dir:string;
}
export { asset__http_get as _get__asset }
export declare type asset__http_get_opts_type = asset__http_get_opts_T;
