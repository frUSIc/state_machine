"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const xstate_1 = require("xstate");
const machine_1 = require("./machine");
let currState;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const candyMachine = (0, xstate_1.interpret)(machine_1.candyMachineStatechart)
                .onTransition((state) => (currState = state.value))
                .start();
            candyMachine.send({ type: machine_1.Event.ADD_VALID_COIN, value: 50 });
            candyMachine.send({ type: machine_1.Event.HALF_TURN });
            candyMachine.send({ type: machine_1.Event.HALF_TURN });
            candyMachine.send({ type: machine_1.Event.ADD_VALID_COIN, value: 20 });
            candyMachine.send({ type: machine_1.Event.HALF_TURN });
            candyMachine.send({ type: machine_1.Event.HALF_TURN });
            candyMachine.send({ type: machine_1.Event.ADD_INVALID_COIN });
            candyMachine.send({ type: machine_1.Event.HALF_TURN });
            candyMachine.send({ type: machine_1.Event.HALF_TURN });
            candyMachine.send({ type: machine_1.Event.SHUTDOWN });
        }
        catch (e) {
            console.log('Uh oh, broke the candy machine:', e.message, '-', currState);
        }
    });
}
exports.main = main;
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStDO0FBQy9DLHVDQUEwRDtBQUUxRCxJQUFJLFNBQWlDLENBQUM7QUFFdEMsU0FBc0IsSUFBSTs7UUFDeEIsSUFBSTtZQUNGLE1BQU0sWUFBWSxHQUFHLElBQUEsa0JBQVMsRUFBQyxnQ0FBc0IsQ0FBQztpQkFDbkQsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xELEtBQUssRUFBRSxDQUFDO1lBQ1gsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdELFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0QsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBSyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM3QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRyxDQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7Q0FBQTtBQWxCRCxvQkFrQkM7QUFFRCxJQUFJLEVBQUUsQ0FBQyJ9