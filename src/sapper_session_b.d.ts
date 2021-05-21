import { Writable$ } from '@ctx-core/store';
export interface sapper_session_ctx_I {
    sapper_session?: sapper_session_T;
}
export declare const sapper_session_b: import("@ctx-core/object").Be<sapper_session_ctx_I, "sapper_session">;
export declare type $sapper_session_T = undefined | object;
export interface sapper_session_T extends Writable$<$sapper_session_T> {
}
export { sapper_session_b as b__session__sapper, };
