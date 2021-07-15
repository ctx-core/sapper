import type { PreloadContext } from './PreloadContext.js'
import type { page_T } from './page.js'
export type preload_T<Session extends object = object, Ret extends unknown = unknown> =
	(this:PreloadContext, page:page_T, session:Session)=>Promise<Ret>
