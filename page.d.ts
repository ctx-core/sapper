import type { Writable } from '@ctx-core/store';
export interface PreloadPage {
    host: string;
    path: string;
    params: Record<string, string>;
    query: Record<string, string | string[]>;
}
export declare type $page_type = PreloadPage;
export declare type page_type = Writable<$page_type>;
export declare type params_type = Record<string, string>;
export declare type query_type = Record<string, string | string[]>;