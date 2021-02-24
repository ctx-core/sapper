import type { $page_T, Page } from './page';
import type { PreloadContext } from './PreloadContext';
import type { $session_T } from './session';
export interface Preload {
    (this: PreloadContext, page: Page, session: any): object | Promise<object>;
}
export declare type preload_T<Out extends object = object> = (page: $page_T, session: $session_T) => object | Promise<Out>;
export declare type preload_type = preload_T;
