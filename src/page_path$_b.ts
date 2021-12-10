import type { Ctx } from '@ctx-core/object'
import type { Readable$ } from '@ctx-core/store'
import { page$_b } from './page$_b.js'
export function page_path$_b(ctx:Ctx):page_path$_T {
	const page$ = page$_b(ctx)
	return page$.path$
}
export interface page_path$_T extends Readable$<string|undefined> {}

