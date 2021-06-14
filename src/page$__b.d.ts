import { Readable$, Unsubscriber } from '@ctx-core/store';
import type { page_T } from './page';
import type { sapper_Ctx } from './sapper_Ctx';
import type { page_host$_T } from './page_host$_b';
import type { page_path$_T } from './page_path$_b';
import type { page_params$_T } from './page_params$_b';
import type { page_query$_T } from './page_query$_b';
import type { page_error$_T } from './page_error$_b';
export declare function page$__b(ctx: sapper_Ctx): page$__T;
export declare type page_notify_T = () => void;
export declare type page_set_T = (new_value: page_T) => void;
export declare type page_subscribe_fn_T = (new_value: page_T) => void;
export declare type page_subscribe_T = (run: page_subscribe_fn_T) => Unsubscriber;
export declare type page$_T = Readable$<page_T> & {
    notify: page_notify_T;
    set: page_set_T;
    subscribe: page_subscribe_T;
};
export interface page$__I {
    set(in_page: page$_T): void;
    host$: page_host$_T;
    path$: page_path$_T;
    params$: page_params$_T;
    query$: page_query$_T;
    error$: page_error$_T;
}
export declare type page$__T = (() => page$_T) & page$__I;
