import type { Ctx } from '@ctx-core/object'
import type { Readable$ } from '@ctx-core/store'
import type { Query } from './page.js'
import { page$_b } from './page$_b.js'
export function page_query$_b(ctx:Ctx):page_query$_T {
	const page$ = page$_b(ctx)
	return page$.query$
}
export interface page_query$_T extends Readable$<Query|undefined> {}
