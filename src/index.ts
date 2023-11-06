import { StateValue, interpret } from 'xstate';
import { Event, candyMachineStatechart } from './machine';

let currState: StateValue | undefined;

export async function main() {
  try {
    const candyMachine = interpret(candyMachineStatechart)
      .onTransition((state) => (currState = state.value))
      .start();
    candyMachine.send({ type: Event.ADD_VALID_COIN, value: 50 });
    candyMachine.send({ type: Event.HALF_TURN });
    candyMachine.send({ type: Event.HALF_TURN });
    candyMachine.send({ type: Event.ADD_VALID_COIN, value: 20 });
    candyMachine.send({ type: Event.HALF_TURN });
    candyMachine.send({ type: Event.HALF_TURN });
    candyMachine.send({ type: Event.ADD_INVALID_COIN });
    candyMachine.send({ type: Event.HALF_TURN });
    candyMachine.send({ type: Event.HALF_TURN });
    candyMachine.send({ type: Event.SHUTDOWN });
  } catch (e) {
    console.log('Uh oh, broke the candy machine:', (e as Error).message, '-', currState);
  }
}

main();
