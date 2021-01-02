export interface PreloadContext {
    fetch: PreloadContext_fetch_type;
    error: PreloadContext_error_type;
    redirect: PreloadContext_redirect_type;
}
export declare type PreloadContext_fetch_type = (url: string, options?: any) => Promise<any>;
export declare type PreloadContext_error_type = (statusCode: number, message: Error | string) => void;
export declare type PreloadContext_redirect_type = (statusCode: number, location: string) => void;
