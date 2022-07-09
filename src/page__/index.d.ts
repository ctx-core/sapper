import { WritableAtom_ } from '@ctx-core/nanostores'
import type { PageContext } from '../_types'
import type { page_error__T } from '../page_error__'
import type { page_host__T } from '../page_host__/index.js'
import type { page_params__T } from '../page_params__/index.js'
import type { page_path__T } from '../page_path__/index.js'
import type { page_query__T } from '../page_query__/index.js'
export declare const page__:import('@ctx-core/object').be__return_T<page__T>
export interface page__T extends WritableAtom_<PageContext> {
	host_:page_host__T;
	path_:page_path__T;
	params_:page_params__T;
	query_:page_query__T;
	error_:page_error__T;
}
export { page__ as page$_ }
