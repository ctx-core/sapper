import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'sapper_session';
export const sapper_session_b = be_(key, () => writable$(undefined));
export { sapper_session_b as b__session__sapper, };
//# sourceMappingURL=src/sapper_session_b.js.map