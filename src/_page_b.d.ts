import { Readable$, Unsubscriber } from '@ctx-core/store';
import type { $page_T, $page_host_T, $page_path_T, $page_params_T, $page_query_T, $page_error_T } from './page';
export declare function _page_b<Ctx extends object = object>(ctx: Ctx): _page_type;
export declare type page_notify_T = () => void;
export declare type page_notify_type = page_notify_T;
export declare type page_set_T = (new_value: $page_T) => void;
export declare type page_set_type = page_set_T;
export declare type page_subscribe_fn_T = (new_value: $page_T) => void;
export declare type page_subscribe_fn_type = page_subscribe_fn_T;
export declare type page_subscribe_T = (run: page_subscribe_fn_T) => Unsubscriber;
export declare type page_subscribe_type = page_subscribe_T;
export interface page_I {
    notify: page_notify_T;
    set: page_set_T;
    subscribe: page_subscribe_T;
}
export declare type page_T = page_I | Readable$<$page_T>;
export declare type page_type = page_T;
export interface page_host_T extends Readable$<$page_host_T> {
}
export declare type page_host_type = page_host_T;
export interface page_path_T extends Readable$<$page_path_T> {
}
export declare type page_path_type = page_path_T;
export interface page_params_T extends Readable$<$page_params_T> {
}
export declare type page_params_type = page_params_T;
export interface page_query_T extends Readable$<$page_query_T> {
}
export declare type page_query_type = page_query_T;
export interface page_error_T extends Readable$<$page_error_T> {
}
export declare type page_error_type = page_error_T;
export interface _page_type {
    (): page_T;
    set(in_page: page_T): void;
    host: page_host_T;
    path: page_path_T;
    params: page_params_T;
    query: page_query_T;
    error: page_error_T;
}
