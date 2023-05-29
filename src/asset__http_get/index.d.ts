import type { Response } from 'express'
/**
 * GET asset
 */
export declare function asset__http_get(
	params:asset__http_get_params_T
):(_:any, res:Response)=>Promise<void>
export interface asset__http_get_params_T {
	asset_key:string
	root_dir:string
}
