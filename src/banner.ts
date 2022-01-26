import chalk from 'chalk';
import figlet from 'figlet';

export function showBanner(): void {
  console.log(
    chalk.red(
      figlet.textSync('SWOB-CLI', {
        font: 'Doom',
        horizontalLayout: 'full',
      })
    )
  );
}
