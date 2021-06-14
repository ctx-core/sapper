import { be, assign } from '@ctx-core/object';
import { readable$_set_ctx_ } from '@ctx-core/store';
import { event_log$_b } from '@ctx-core/event-log';
const key = 'page$_';
export function page$__b(ctx) {
    return be(ctx, key, () => {
        let page$, unsubscribe;
        const event_log$ = event_log$_b(ctx);
        const { store: host$, set: set_host } = readable$_set_ctx_(undefined);
        host$.subscribe(host => event_log$.add({ host }));
        const { store: path$, set: set_path } = readable$_set_ctx_(undefined);
        path$.subscribe(path => event_log$.add({ path }));
        const { store: params$, set: set_params } = readable$_set_ctx_(undefined);
        params$.subscribe(params => event_log$.add({ params }));
        const { store: query$, set: set_query } = readable$_set_ctx_(undefined);
        query$.subscribe(query => event_log$.add({ query }));
        const { store: error$, set: set_error } = readable$_set_ctx_(undefined);
        error$.subscribe(error => event_log$.add({ error }));
        return assign(page$_, {
            set, host$, path$, params$, query$, error$,
        });
        function set(in_page) {
            if (unsubscribe) {
                unsubscribe();
            }
            page$ = in_page;
            unsubscribe = page$.subscribe(page => {
                event_log$.add({ page });
                set_host(page === null || page === void 0 ? void 0 : page.host);
                set_path(page === null || page === void 0 ? void 0 : page.path);
                set_params(page === null || page === void 0 ? void 0 : page.params);
                set_query(page === null || page === void 0 ? void 0 : page.query);
                set_error(page === null || page === void 0 ? void 0 : page.error);
            });
        }
        function page$_() {
            return page$;
        }
    });
}
//# sourceMappingURL=src/page$__b.js.map