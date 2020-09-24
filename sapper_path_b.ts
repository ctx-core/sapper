import { derived } from 'svelte/store'
import { _b } from '@ctx-core/object'
import { _andand } from '@ctx-core/function'
import { sapper_page_b } from './sapper_page_b'
export const sapper_path_b = _b('__path__sapper', ctx=>
	derived(
		sapper_page_b(ctx),
		_andand('path')))
export const b__path__sapper = sapper_path_b
