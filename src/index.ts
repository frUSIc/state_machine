import promptSync from 'prompt-sync';
const prompt = promptSync();
import { runCandyMachine } from './candy_machine';

// TODO some sort of frontend
export async function main() {
  console.log('Which machine would you like to play with?');
  console.log('  a) Candy machine');
  const machineChoice = prompt('> ');
  console.log();
  if (machineChoice === 'a') {
    runCandyMachine();
  } else {
    // TODO money change converting machine
  }
}

main();
