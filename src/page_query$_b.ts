import type { Readable$ } from '@ctx-core/store'
import { page$_b } from './page$_b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
import type { page_query_T } from './page.js'
export function page_query$_b(ctx:sapper_Ctx):page_query$_T {
	const page$ = page$_b(ctx)
	return page$.query$
}
export interface page_query$_T extends Readable$<page_query_T|undefined> {}
