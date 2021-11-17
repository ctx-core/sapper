import type { page_T } from './page.js'
import type { PreloadContext } from './PreloadContext.js'
export type preload_T<Session extends object = object, Ret extends unknown = unknown> =
	(this:PreloadContext, page:page_T, session:Session)=>Promise<Ret>
