import type { Readable$ } from '@ctx-core/store'
import type { page_host_T } from './page'
import { page__b } from './page__b'
import type { sapper_Ctx } from './sapper_Ctx'
export function page_host$_b(ctx:sapper_Ctx):page_host$_T {
	const page_ = page__b(ctx)
	return page_.host$
}
export interface page_host$_T extends Readable$<page_host_T> {}
