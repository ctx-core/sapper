import type { $page_type, Page } from './page'
import type { PreloadContext } from './PreloadContext'
import type { $session_type } from './session'
// Use Preload from @sapper/common when https://github.com/sveltejs/sapper/issues/1583 is solved
export interface Preload {
	(this:PreloadContext, page:Page, session:any):object|Promise<object>;
}
export type preload_type<T extends object = object> =
	(page:$page_type, session:$session_type)=>object|Promise<T>
