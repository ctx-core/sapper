import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { _andand, maybe_null } from '@ctx-core/function'
import { sapper_page_b } from './sapper_page_b'
export const sapper_path_b:sapper_path_b_type =
	_b('sapper_path', ctx=>
		derived(sapper_page_b(ctx), _andand('path'))
	)
export const b__path__sapper:sapper_path_b_type = sapper_path_b
export type $sapper_path = string
export type $maybe_sapper_path = maybe_null<$sapper_path>
export type sapper_path = Readable<$sapper_path>
export type sapper_path_b_type = B<sapper_path>
