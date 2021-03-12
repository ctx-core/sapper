export interface PageContext {
    host: $page_host_T;
    path: $page_path_T;
    params: $page_params_T;
    query: $page_query_T;
    error?: $page_error_T;
}
export type { PageContext as Page };
export declare type $page_host_T = string;
export declare type $page_host_type = $page_host_T;
export declare type $page_path_T = string;
export declare type $page_path_type = $page_path_T;
export declare type PreloadPage = PageContext;
export declare type $page_T = PageContext;
export declare type $page_type = $page_T;
export interface $page_params_T extends Record<string, string | number> {
}
export declare type $page_params_type = $page_params_T;
export interface $page_query_T extends Record<string, string | number | boolean> {
}
export declare type $page_query_type = $page_query_T;
export declare type $page_error_T = Error | undefined;
export declare type $page_error_type = $page_error_T;
