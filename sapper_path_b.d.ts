import { B } from '@ctx-core/object';
import { maybe_null } from '@ctx-core/function';
import { Readable } from '@ctx-core/store';
import { sapper_page_b } from './sapper_page_b';
export declare const sapper_path_b: sapper_path_b_type;
export declare type $sapper_path = string;
export declare type $maybe_sapper_path = maybe_null<$sapper_path>;
export interface sapper_path extends Readable<$sapper_path> {
}
export declare type sapper_path_b_type = B<sapper_path>;
export { sapper_page_b as b__path__sapper };
