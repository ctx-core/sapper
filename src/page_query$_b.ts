import type { Readable$ } from '@ctx-core/store'
import { page__b } from './page__b'
import type { sapper_Ctx } from './sapper_Ctx'
import type { page_query_T } from './page'
export function page_query$_b(ctx:sapper_Ctx):page_query$_T {
	const page_ = page__b(ctx)
	return page_.query$
}
export interface page_query$_T extends Readable$<page_query_T> {}
