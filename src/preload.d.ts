import type { $page_type, Page } from './page';
import type { PreloadContext } from './PreloadContext';
import type { $session_type } from './session';
export interface Preload {
    (this: PreloadContext, page: Page, session: any): object | Promise<object>;
}
export declare type preload_type<T extends object = object> = (page: $page_type, session: $session_type) => object | Promise<T>;
