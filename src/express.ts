import { readFile } from 'fs/promises'
import resolve from 'resolve'
import { promisify } from 'util'
const resolve_async = promisify(resolve)
import type { Response } from 'express'
import { flatten } from '@ctx-core/array'
/**
 * GET asset
 */
export function get_asset_(opts:get_asset__opts_T) {
	const { asset_key, root_dir } = opts
	return get_asset
	async function get_asset(_:any, res:Response) {
		const NODE_ENV = process.env.NODE_ENV
		const build_dir =
			(NODE_ENV === 'dev' || NODE_ENV === 'development')
			? `${root_dir}/__sapper__/dev`
			: `${root_dir}/__sapper__/build`
		const build_path = (await resolve_async(`${build_dir}/build.json`)) as string
		const build = JSON.parse(
			(await readFile(build_path)).toString()
		)
		const { assets } = build
		const relative_path_str = assets[asset_key]
		const relative_path_a = flatten([relative_path_str])
		res.writeHead(200, {
			'Content-Type': 'application/javascript',
		})
		const body = await body_()
		res.end(body)
		async function body_() {
			const asset_body_a = await Promise.all(asset_body_promise_a_())
			return asset_body_a.join('\n')
		}
		function asset_body_promise_a_() {
			const promise_a = [] as Promise<Buffer>[]
			for (let i = 0; i < relative_path_a.length; i++) {
				promise_a.push(asset_body_(relative_path_a[i]))
			}
			return promise_a
		}
		async function asset_body_(relative_path:string) {
			const resolved_path =
				(await resolve_async(`${build_dir}/client/${relative_path}`)) as string
			return readFile(resolved_path)
		}
	}
}
export interface get_asset__opts_T {
	asset_key:string,
	root_dir:string,
}
export {
	get_asset_ as _get__asset
}
export type get_asset__opts_type = get_asset__opts_T
