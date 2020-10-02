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
export declare type page_type = Writable<$page_type>;
export declare type params_type = Record<string, string>;
export declare type query_type = Record<string, string | string[]>;
export declare type error_type = Error;
