import { Writable } from '@ctx-core/store';
export declare type $page_type = {
    host: string;
    path: string;
    params: params_type;
    query: query_type;
};
export declare type page_type = Writable<$page_type>;
export declare type params_type = {
    [key: string]: any;
};
export declare type query_type = {
    [key: string]: any;
};
