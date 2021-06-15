import type { PreloadContext } from './PreloadContext';
import type { page_T } from './page';
export declare type preload_T<Session extends object = object, Ret extends unknown = unknown> = (this: PreloadContext, page: page_T, session: Session) => Promise<Ret>;
