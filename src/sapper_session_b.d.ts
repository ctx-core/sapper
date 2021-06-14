import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { sapper_Ctx } from './sapper_Ctx';
declare const key = "sapper_session";
export declare const sapper_session_b: B<sapper_Ctx, typeof key>;
export declare type $sapper_session_T = undefined | object;
export interface sapper_session_T extends Writable$<$sapper_session_T> {
}
export { sapper_session_b as b__session__sapper, };
