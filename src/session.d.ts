import type { Writable } from '@ctx-core/store';
export interface PreloadSession extends Record<string, any> {
}
export declare type $session_T = PreloadSession;
export declare type $session_type = $session_T;
export interface session_T extends Writable<$session_T> {
}
export declare type session_type = session_T;
