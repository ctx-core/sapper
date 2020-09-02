import { $page_type } from './page';
import { $session_type } from './session';
export declare type preload_type<T = void> = (page: $page_type, session: $session_type) => Promise<T>;
