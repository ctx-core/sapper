import type { $page_T, Page } from './page'
import type { PreloadContext } from './PreloadContext'
import type { $session_T } from './session'
// Use Preload from @sapper/common when https://github.com/sveltejs/sapper/issues/1745 is solved
export interface Preload {
	(this:PreloadContext, page:Page, session:any):object|Promise<object>
}
export type preload_T<Out extends object = object> =
	(page:$page_T, session:$session_T)=>object|Promise<Out>
export type preload_type = preload_T
