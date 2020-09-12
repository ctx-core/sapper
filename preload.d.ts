import type { $page_type } from './page';
import type { $session_type } from './session';
export declare type preload_type<T = void> = (page: $page_type, session: $session_type) => Promise<T>;
