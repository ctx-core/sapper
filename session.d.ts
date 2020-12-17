import type { Writable } from '@ctx-core/store';
export interface PreloadSession extends Record<string, any> {
}
export declare type $session_type = PreloadSession;
export interface session_type extends Writable<$session_type> {
}
