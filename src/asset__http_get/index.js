import { flatten } from '@ctx-core/array'
import { import_meta_env_ } from '@ctx-core/env'
import { readFile } from 'fs/promises'
/** @typedef {import('./index.d.ts').asset__http_get_params_T}asset__http_get_params_T */
/**
 * GET asset
 * @param {asset__http_get_params_T}params
 */
export function asset__http_get(params) {
	const { asset_key, root_dir } = params
	return get_asset
	async function get_asset(_, res) {
		const NODE_ENV = import_meta_env_().NODE_ENV
		const build_dir =
			NODE_ENV === 'dev' || NODE_ENV === 'development'
			? `${root_dir}/__sapper__/dev`
			: `${root_dir}/__sapper__/build`
		const build_path = await import.meta.resolve(`${build_dir}/build.json`)
		const build = JSON.parse(await readFile(build_path).then($=>$.toString()))
		const { assets } = build
		const relative_path_str = assets[asset_key]
		const relative_path_a = flatten([
			relative_path_str
		])
		res.writeHead(200, {
			'Content-Type': 'application/javascript'
		})
		const body = await body_()
		res.end(body)
		async function body_() {
			const asset_body_a = await Promise.all(asset_body_promise_a_())
			return asset_body_a.join('\n')
		}
		function asset_body_promise_a_() {
			const promise_a = []
			for (let i = 0; i < relative_path_a.length; i++) {
				promise_a.push(asset_body_(relative_path_a[i]))
			}
			return promise_a
		}
		async function asset_body_(relative_path) {
			const resolved_path = await import.meta.resolve(`${build_dir}/client/${relative_path}`)
			return readFile(resolved_path)
		}
	}
}
