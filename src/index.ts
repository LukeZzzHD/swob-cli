#! /usr/bin/env node
import clear from 'clear';
import { Command } from 'commander';
import { showBanner } from './banner';

const program = new Command();

clear();
showBanner();
