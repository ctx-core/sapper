import { _b, B } from '@ctx-core/object'
import { writable } from 'svelte/store'
import type { Writable } from '@ctx-core/store'
export const sapper_session_b:sapper_session_b_type =
	_b('sapper_session', ()=>
		writable(null)
	)
export const b__session__sapper:sapper_session_b_type = sapper_session_b
export type $sapper_session_type = null|object
export type sapper_session_type = Writable<$sapper_session_type>
export type sapper_session_b_type = B<sapper_session_type>