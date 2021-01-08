import { Readable, Unsubscriber } from '@ctx-core/store';
import type { $page_type, $host_type, $path_type, $params_type, $query_type, $error_type } from './page';
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
export interface host_type extends Readable<$host_type> {
}
export interface path_type extends Readable<$path_type> {
}
export interface params_type extends Readable<$params_type> {
}
export interface query_type extends Readable<$query_type> {
}
export interface error_type extends Readable<$error_type> {
}
export interface _page_type {
    (): $page_type;
    set(in_page: page_type): void;
    host: host_type;
    path: path_type;
    params: params_type;
    query: query_type;
    error: error_type;
}
