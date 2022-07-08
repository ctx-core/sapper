import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { PageParams } from './page.js'
import { page__ } from './page__.js'
export function page_params__(ctx:Ctx):page_params__T {
	return page__(ctx).params_
}
export type page_params__T = ReadableAtom_<PageParams|undefined>
export { page_params__ as page_params$_ }
