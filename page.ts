import { Writable } from '@ctx-core/store'
// TODO: Remove or alias when https://github.com/sveltejs/sapper/pull/1468 is released
export interface PreloadPage {
	host: string;
	path: string;
	params: Record<string, string>;
	query: Record<string, string | string[]>;
}
export type $page_type = PreloadPage;
export type page_type = Writable<$page_type>
export type params_type = Record<string, string>
export type query_type = Record<string, string | string[]>
