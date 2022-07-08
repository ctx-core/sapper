import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page__ } from './page__.js'
export function page_host__(ctx:Ctx):page_host__T {
	return page__(ctx).host_
}
export type page_host__T = ReadableAtom_<string|undefined>
export { page_host__ as page_host$_ }
