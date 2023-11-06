export declare enum Event {
    HALF_TURN = "HALF_TURN",
    ADD_VALID_COIN = "ADD_VALID_COIN",
    ADD_INVALID_COIN = "ADD_INVALID_COIN",
    REMOVE_COIN = "REMOVE_COIN",
    SHUTDOWN = "SHUTDOWN"
}
type CandyMachineContext = {
    currentCoinValue: number;
    totalValue: number;
    numSales: number;
    lastDispensedAt: Date;
};
type CandyMachineEvents = {
    type: Event.HALF_TURN;
} | {
    type: Event.ADD_VALID_COIN;
    value: number;
} | {
    type: Event.ADD_INVALID_COIN;
} | {
    type: Event.REMOVE_COIN;
} | {
    type: Event.SHUTDOWN;
};
export declare const candyMachineStatechart: import("xstate").StateMachine<CandyMachineContext, any, CandyMachineEvents, {
    value: any;
    context: CandyMachineContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, CandyMachineEvents, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export {};
