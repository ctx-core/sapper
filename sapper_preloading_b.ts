import { _b, B } from '@ctx-core/object'
import { writable } from 'svelte/store'
import type { Writable } from '@ctx-core/store'
export const sapper_preloading_b:sapper_preloading_b_type =
	_b('sapper_preloading', ()=>
		writable(null)
	)
export const b__preloading__sapper = sapper_preloading_b as sapper_preloading_b_type
export type $sapper_preloading_type = object
export type $maybe_sapper_preloading_type = null|$sapper_preloading_type
export type sapper_preloading_type = Writable<$maybe_sapper_preloading_type>
export type sapper_preloading_b_type = B<sapper_preloading_type>
