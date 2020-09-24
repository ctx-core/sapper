import { _b } from '@ctx-core/object'
import { writable } from 'svelte/store'
export const sapper_session_b = _b('sapper_session', ()=>
	writable(null))
export const b__session__sapper = sapper_session_b
