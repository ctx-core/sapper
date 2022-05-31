import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { page__ } from './page__.js'
export function page_error__(ctx:Ctx):page_error__T {
	return page__(ctx).error_
}
export type page_error__T = ReadableAtom_<Error|undefined>
export { page_error__ as page_error$_ }
