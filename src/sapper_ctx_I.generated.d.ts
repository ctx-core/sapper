import type { page$__T } from './page$__b';
import type { page_error$_T } from './page_error$_b';
import type { page_host$_T } from './page_host$_b';
import type { page_params$_T } from './page_params$_b';
import type { page_path$_T } from './page_path$_b';
import type { page_query$_T } from './page_query$_b';
import type { sapper_preloading_T } from './sapper_preloading_b';
import type { sapper_session_T } from './sapper_session_b';
export interface sapper_ctx_I {
    page$_?: page$__T;
    page_error$?: page_error$_T;
    page_host$?: page_host$_T;
    page_params$?: page_params$_T;
    page_path$?: page_path$_T;
    page_query$?: page_query$_T;
    sapper_preloading?: sapper_preloading_T;
    sapper_session?: sapper_session_T;
}
