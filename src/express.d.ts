/**
 * GET asset
 */
export declare function _get_asset(opts: _get_asset_opts_type): (_: any, res: any) => Promise<void>;
export declare const _get__asset: typeof _get_asset;
export interface _get_asset_opts_type {
    asset_key: string;
    root_dir: string;
}
