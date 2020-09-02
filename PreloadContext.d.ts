export interface PreloadContext {
    fetch: (url: string, options?: any) => Promise<any>;
    error: (statusCode: number, message: Error | string) => void;
    redirect: (statusCode: number, location: string) => void;
}
