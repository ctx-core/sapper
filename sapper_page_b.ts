import { _b, B } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const sapper_page_b:sapper_page_b_type =
	_b('sapper_page', ()=>
		writable(null)
	)
export const b__page__sapper:sapper_page_b_type = sapper_page_b
export type $sapper_page_type = object
export type $maybe_sapper_page_type = null|$sapper_page_type
export type sapper_page_type = Writable<$maybe_sapper_page_type>
export type sapper_page_b_type = B<sapper_page_type>
