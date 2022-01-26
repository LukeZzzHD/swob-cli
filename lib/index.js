#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clear_1 = __importDefault(require("clear"));
const commander_1 = require("commander");
const banner_1 = require("./banner");
const program = new commander_1.Command();
(0, clear_1.default)();
(0, banner_1.showBanner)();
