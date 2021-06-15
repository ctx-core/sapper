import type { Response } from 'express';
/**
 * GET asset
 */
export declare function get_asset_(opts: get_asset__opts_T): (_: any, res: Response) => Promise<void>;
export interface get_asset__opts_T {
    asset_key: string;
    root_dir: string;
}
export { get_asset_ as _get__asset };
export declare type get_asset__opts_type = get_asset__opts_T;
