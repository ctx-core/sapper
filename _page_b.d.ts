import { Readable, Unsubscriber } from '@ctx-core/store';
import type { $page_type, $page_host_type, $page_path_type, $page_params_type, $page_query_type, $page_error_type } from './page';
export declare function _page_b<C extends object = object>(ctx: C): _page_type;
export declare type page_notify_type = () => void;
export declare type page_set_type = (new_value: $page_type) => void;
export declare type page_subscribe_fn_type = (new_value: $page_type) => void;
export declare type page_subscribe_type = (run: page_subscribe_fn_type) => Unsubscriber;
export interface page_type {
    notify: page_notify_type;
    set: page_set_type;
    subscribe: page_subscribe_type;
}
export interface page_host_type extends Readable<$page_host_type> {
}
export interface page_path_type extends Readable<$page_path_type> {
}
export interface page_params_type extends Readable<$page_params_type> {
}
export interface page_query_type extends Readable<$page_query_type> {
}
export interface page_error_type extends Readable<$page_error_type> {
}
export interface _page_type {
    (): $page_type;
    set(in_page: page_type): void;
    host: page_host_type;
    path: page_path_type;
    params: page_params_type;
    query: page_query_type;
    error: page_error_type;
}
