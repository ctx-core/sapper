export interface Page {
    host: $host_type;
    path: $path_type;
    params: $params_type;
    query: $query_type;
    error?: $error_type;
}
export declare type $host_type = string;
export declare type $path_type = string;
export declare type PreloadPage = Page;
export declare type $page_type = Page;
export interface $params_type extends Record<string, string | number> {
}
export interface $query_type extends Record<string, string | number | boolean> {
}
export declare type $error_type = Error | undefined;
