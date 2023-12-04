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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const candy_machine_1 = require("./candy_machine");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Which machine would you like to play with?');
        console.log('  a) Candy machine');
        const machineChoice = prompt('> ');
        console.log();
        if (machineChoice === 'a') {
            (0, candy_machine_1.runCandyMachine)();
        }
        else {
        }
    });
}
exports.main = main;
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUEscUJBQVUsR0FBRSxDQUFDO0FBQzVCLG1EQUFrRDtBQUdsRCxTQUFzQixJQUFJOztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLGFBQWEsS0FBSyxHQUFHLEVBQUU7WUFDekIsSUFBQSwrQkFBZSxHQUFFLENBQUM7U0FDbkI7YUFBTTtTQUVOO0lBQ0gsQ0FBQztDQUFBO0FBVkQsb0JBVUM7QUFFRCxJQUFJLEVBQUUsQ0FBQyJ9