declare enum Event {
    HALF_TURN = "HALF_TURN",
    ADD_COIN = "ADD_COIN",
    REMOVE_COIN = "REMOVE_COIN",
    SHUTDOWN = "SHUTDOWN",
    TAMPER = "TAMPER"
}
type Events = {
    type: Exclude<Event, Event.ADD_COIN>;
} | {
    type: Event.ADD_COIN;
    value: number;
};
type Context = {
    currentCoinValue: number;
    totalValue: number;
    numSales: number;
    lastDispensedAt: Date;
};
export declare const Statechart: import("xstate").StateMachine<Context, any, Events, {
    value: any;
    context: Context;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, Events, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export declare function runCandyMachine(): void;
export {};
