import type { Readable$ } from '@ctx-core/store'
import { page$__b } from './page$__b'
import type { sapper_Ctx } from './sapper_Ctx'
import type { page_path_T } from './page'
export function page_path$_b(ctx:sapper_Ctx):page_path$_T {
	const page_ = page$__b(ctx)
	return page_.path$
}
export interface page_path$_T extends Readable$<page_path_T|undefined> {}

