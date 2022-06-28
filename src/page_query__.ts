import { type ReadableAtom_ } from '@ctx-core/nanostores'
import { type Ctx } from '@ctx-core/object'
import type { Query } from './page.js'
import { page__ } from './page__.js'
export function page_query__(ctx:Ctx):page_query__T {
	return page__(ctx).query_
}
export type page_query__T = ReadableAtom_<Query|undefined>
export { page_query__ as page_query$_ }
