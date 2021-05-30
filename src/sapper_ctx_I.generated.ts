/*
 * This file was generated by `npm run generate_ctx_I_file` in @ctx-core/dev-tools
*/
import { _b } from '@ctx-core/object'
import type { sapper_Ctx } from './sapper_Ctx'
import type { page__T } from './page__b'
import { page__b } from './page__b'
import type { page_error$_T } from './page_error$_b'
import { page_error$_b } from './page_error$_b'
import type { page_host$_T } from './page_host$_b'
import { page_host$_b } from './page_host$_b'
import type { page_params$_T } from './page_params$_b'
import { page_params$_b } from './page_params$_b'
import type { page_path$_T } from './page_path$_b'
import { page_path$_b } from './page_path$_b'
import type { page_query$_T } from './page_query$_b'
import { page_query$_b } from './page_query$_b'
import type { sapper_preloading_T } from './sapper_preloading_b'
import { sapper_preloading_b } from './sapper_preloading_b'
import type { sapper_session_T } from './sapper_session_b'
import { sapper_session_b } from './sapper_session_b'
export interface sapper_ctx_I {
	page_?:page__T
	page_error$?:page_error$_T
	page_host$?:page_host$_T
	page_params$?:page_params$_T
	page_path$?:page_path$_T
	page_query$?:page_query$_T
	sapper_preloading?:sapper_preloading_T
	sapper_session?:sapper_session_T
	sapper_b_h?:sapper_b_h_T
}
export interface sapper_b_h_T {
	get page_():page__T
	get page_error$():page_error$_T
	get page_host$():page_host$_T
	get page_params$():page_params$_T
	get page_path$():page_path$_T
	get page_query$():page_query$_T
	get sapper_preloading():sapper_preloading_T
	get sapper_session():sapper_session_T
}
export function sapper_b_h_b(ctx:sapper_Ctx):sapper_b_h_T {
	return _b<sapper_Ctx, 'sapper_b_h'>('sapper_b_h', ()=>{
		return {
			get page_() { return page__b(ctx) },
			get page_error$() { return page_error$_b(ctx) },
			get page_host$() { return page_host$_b(ctx) },
			get page_params$() { return page_params$_b(ctx) },
			get page_path$() { return page_path$_b(ctx) },
			get page_query$() { return page_query$_b(ctx) },
			get sapper_preloading() { return sapper_preloading_b(ctx) },
			get sapper_session() { return sapper_session_b(ctx) }
		}
	})(ctx)
}