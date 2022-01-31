import type { ReadableAtom$ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Query } from './page.js'
import { page$_ } from './page$_.js'
export function page_query$_(ctx:Ctx):page_query$_T {
	return page$_(ctx).query$
}
export type page_query$_T = ReadableAtom$<Query|undefined>
