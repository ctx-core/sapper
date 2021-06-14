import type { Response } from 'express';
/**
 * GET asset
 */
export declare function _get_asset(opts: _get_asset_opts_T): (_: any, res: Response) => Promise<void>;
export interface _get_asset_opts_T {
    asset_key: string;
    root_dir: string;
}
export { _get_asset as _get__asset };
export declare type _get_asset_opts_type = _get_asset_opts_T;
