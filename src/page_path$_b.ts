import type { Readable$ } from '@ctx-core/store'
import { page$_b } from './page$_b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
import type { page_path_T } from './page.js'
export function page_path$_b(ctx:sapper_Ctx):page_path$_T {
	const page$ = page$_b(ctx)
	return page$.path$
}
export interface page_path$_T extends Readable$<page_path_T|undefined> {}

