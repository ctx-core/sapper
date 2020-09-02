import { Writable } from '@ctx-core/store'
export type $page_type = {
	host:string
	path:string
	params:params_type
	query:query_type
};
export type page_type = Writable<$page_type>
export type params_type = { [key:string]:any }
export type query_type = { [key:string]:any }
