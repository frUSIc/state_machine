import {
  ActionFunction,
  AnyAssignAction,
  MachineSchema,
  StatesConfig,
  assign,
  createMachine,
} from 'xstate';

enum State {
  NO_COIN = 'NO_COIN',
  INVALID_COIN = 'INVALID_COIN',
  VALID_COIN = 'VALID_COIN',
  NO_CANDY_DISPENSED = 'NO_CANDY_DISPENSED',
  CANDY_DISPENSED = 'CANDY_DISPENSED',
  SHUTDOWN = 'SHUTDOWN',
}

export enum Event {
  HALF_TURN = 'HALF_TURN',
  ADD_VALID_COIN = 'ADD_VALID_COIN',
  ADD_INVALID_COIN = 'ADD_INVALID_COIN',
  REMOVE_COIN = 'REMOVE_COIN',
  SHUTDOWN = 'SHUTDOWN',
}

enum Action {
  DISPENSE_CANDY = 'DISPENSE_CANDY',
  RECORD_COIN = 'RECORD_COIN',
  RECORD_SALE = 'RECORD_SALE',
  LOG_SALES = 'LOG_SALES',
  SHUTTING_DOWN = 'SHUTTING_DOWN',
  // Throw exception
  INVALID_ACTION = 'INVALID_ACTION',
}

enum CandyColour {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

enum CandyQuality {
  GREAT = 'tasty',
  REGULAR = 'basic',
  DISGUSTING = 'disgusting',
}

type CandyMachineContext = {
  currentCoinValue: number;
  totalValue: number;
  numSales: number;
  lastDispensedAt: Date;
};

type CandyMachineEvents =
  | { type: Event.HALF_TURN }
  | { type: Event.ADD_VALID_COIN; value: number }
  | { type: Event.ADD_INVALID_COIN }
  | { type: Event.REMOVE_COIN }
  | { type: Event.SHUTDOWN };

// Schema allows typechecking, does not provide values in itself
const candyMachineSchema: MachineSchema<CandyMachineContext, CandyMachineEvents> = {
  context: {} as CandyMachineContext,
  events: {} as CandyMachineEvents,
};

const candyMachineStates: StatesConfig<
  CandyMachineContext,
  typeof candyMachineSchema,
  CandyMachineEvents
> = {
  // Coin slot is open
  [State.NO_COIN]: {
    on: {
      [Event.HALF_TURN]: State.NO_CANDY_DISPENSED,
      // TODO insert coin action with input value
      // Check value to determine if valid or invalid for the state transition
      [Event.ADD_VALID_COIN]: {
        target: State.VALID_COIN,
        actions: Action.RECORD_COIN,
      },
      [Event.ADD_INVALID_COIN]: State.INVALID_COIN,
      [Event.SHUTDOWN]: State.SHUTDOWN,
    },
  },
  // Invalid coin is in coin slot
  [State.INVALID_COIN]: {
    on: {
      [Event.REMOVE_COIN]: State.NO_COIN,
      '*': {
        actions: Action.INVALID_ACTION,
      },
    },
  },
  // Valid coin is in coin slot
  [State.VALID_COIN]: {
    on: {
      [Event.HALF_TURN]: {
        target: State.CANDY_DISPENSED,
        actions: [Action.DISPENSE_CANDY, Action.RECORD_SALE],
      },
      [Event.REMOVE_COIN]: State.NO_COIN,
    },
  },
  // Coin slot is closed, no candy is given
  [State.NO_CANDY_DISPENSED]: {
    on: { [Event.HALF_TURN]: State.NO_COIN },
  },
  // Coin slot is closed, candy is given
  [State.CANDY_DISPENSED]: {
    on: { [Event.HALF_TURN]: State.NO_COIN },
  },
  [State.SHUTDOWN]: {
    type: 'final',
    entry: [Action.LOG_SALES, Action.SHUTTING_DOWN],
  },
};

const candyMachineActions: Record<
  Action,
  | ActionFunction<CandyMachineContext, CandyMachineEvents>
  | AnyAssignAction<CandyMachineContext, CandyMachineEvents>
> = {
  [Action.RECORD_COIN]: assign({
    currentCoinValue: (context, event) => {
      switch (event.type) {
        case Event.ADD_VALID_COIN:
          return context.currentCoinValue + event.value;
        default:
          return context.currentCoinValue;
      }
    },
  }),
  [Action.RECORD_SALE]: assign({
    currentCoinValue: () => 0,
    totalValue: (context) => context.totalValue + context.currentCoinValue,
    numSales: (context) => context.numSales + 1,
  }),
  [Action.DISPENSE_CANDY]: () => {
    const randColourNum = Math.random() * 3;
    const randQualityNum = Math.random() * 3;
    const candyColour =
      randColourNum < 1
        ? CandyColour.RED
        : randColourNum < 2
        ? CandyColour.GREEN
        : CandyColour.BLUE;
    const candyQuality =
      randQualityNum < 1
        ? CandyQuality.DISGUSTING
        : randColourNum < 2
        ? CandyQuality.GREAT
        : CandyQuality.REGULAR;
    console.log(`A ${candyQuality} ${candyColour} candy has been dispensed, enjoy!`);
  },
  [Action.SHUTTING_DOWN]: () => console.log('--- Candy machine is shutting down for the day ---'),
  [Action.LOG_SALES]: (context) =>
    console.log(
      `Day's sales: $${(context.totalValue / 100).toFixed(2)} earned from ${
        context.numSales
      } sales. Last sale dated ${context.lastDispensedAt}`
    ),
  [Action.INVALID_ACTION]: (_, event) => {
    throw new Error(`Invalid event ${event.type}`);
  },
};

export const candyMachineStatechart = createMachine(
  {
    predictableActionArguments: true,
    initial: State.NO_COIN,
    states: candyMachineStates,
    schema: candyMachineSchema,
    context: {
      currentCoinValue: 0,
      totalValue: 0,
      numSales: 0,
      lastDispensedAt: new Date(),
    },
    entry: [() => console.log('--- Candy machine is open for business ---')],
  },
  { actions: candyMachineActions }
);
