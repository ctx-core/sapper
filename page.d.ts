import type { Writable } from '@ctx-core/store';
export interface Page {
    host: string;
    path: string;
    params: params_type;
    query: query_type;
    error?: error_type;
}
export declare type PreloadPage = Page;
export declare type $page_type = Page;
export interface page_type extends Writable<$page_type> {
}
export interface params_type extends Record<string, string> {
}
export interface query_type extends Record<string, string | string[]> {
}
export interface error_type extends Error {
}
