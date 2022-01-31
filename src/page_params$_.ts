import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { PageParams } from './page.js'
import { page$_ } from './page$_.js'
export function page_params$_(ctx:Ctx):page_params$_T {
	return page$_(ctx).params$
}
export type page_params$_T = ReadableAtom$<PageParams|undefined>
