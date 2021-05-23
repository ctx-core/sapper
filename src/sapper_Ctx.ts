import type { event_log_Ctx } from '@ctx-core/event-log'
import type { _page_T } from './_page_b'
import type { sapper_preloading_T } from './sapper_preloading_b'
import type { sapper_session_T } from './sapper_session_b'
export interface sapper_Ctx extends event_log_Ctx{
	_page?:_page_T
	sapper_preloading?:sapper_preloading_T
	sapper_session?:sapper_session_T
}
