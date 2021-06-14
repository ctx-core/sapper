import { promisify } from 'util'
import type { Response } from 'express'
import { flatten } from '@ctx-core/array'
const resolve = promisify(require('resolve'))
import fs from 'fs'
/**
 * GET asset
 */
export function _get_asset(opts:_get_asset_opts_T) {
	const { asset_key, root_dir } = opts
	return get_asset
	async function get_asset(_:any, res:Response) {
		const NODE_ENV = process.env.NODE_ENV
		const build_dir =
			(NODE_ENV === 'dev' || NODE_ENV === 'development')
			? `${root_dir}/__sapper__/dev`
			: `${root_dir}/__sapper__/build`
		const path__build = await resolve(`${build_dir}/build.json`)
		const build = JSON.parse(
			(await fs.promises.readFile(path__build)).toString()
		)
		const { assets } = build
		const relative_path_str = assets[asset_key]
		const relative_path_a = flatten([relative_path_str])
		res.writeHead(200, {
			'Content-Type': 'application/javascript',
		})
		const body = await _body()
		res.end(body)
		async function _body() {
			const asset_body_a = await Promise.all(asset_body_promise_a_())
			return asset_body_a.join('\n')
		}
		function asset_body_promise_a_() {
			const promise_a = [] as Promise<Buffer>[]
			for (let i = 0; i < relative_path_a.length; i++) {
				promise_a.push(_asset_body(relative_path_a[i]))
			}
			return promise_a
		}
		async function _asset_body(relative_path:string) {
			const resolved_path =
				await resolve(`${build_dir}/client/${relative_path}`)
			return fs.promises.readFile(resolved_path)
		}
	}
}
export interface _get_asset_opts_T {
	asset_key:string,
	root_dir:string,
}
export {
	_get_asset as _get__asset
}
export type _get_asset_opts_type = _get_asset_opts_T
