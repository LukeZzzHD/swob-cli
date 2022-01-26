"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBanner = void 0;
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
function showBanner() {
    console.log(chalk_1.default.red(figlet_1.default.textSync('swob-cli', {
        font: 'Doom',
        horizontalLayout: 'full',
    })));
}
exports.showBanner = showBanner;
