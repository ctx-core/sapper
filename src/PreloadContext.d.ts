export interface PreloadContext {
    fetch: PreloadContext_fetch_T;
    error: PreloadContext_error_T;
    redirect: PreloadContext_redirect_T;
}
export declare type PreloadContext_fetch_T = (url: string, options?: any) => Promise<any>;
export declare type PreloadContext_fetch_type = PreloadContext_fetch_T;
export declare type PreloadContext_error_T = (statusCode: number, message: Error | string) => void;
export declare type PreloadContext_error_type = PreloadContext_error_T;
export declare type PreloadContext_redirect_T = (statusCode: number, location: string) => void;
export declare type PreloadContext_redirect_type = PreloadContext_redirect_T;
