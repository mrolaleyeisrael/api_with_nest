import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    const entry = `${context ? `[${context}] ` : ''}${message}`;
    super.log(entry);
  }

  error(message: string, stackOrContext?: string) {
    const entry=`${stackOrContext ? `[${stackOrContext}] ` : ''}${message}`;
    super.error(entry);
  }

  warn(message: string) {
    super.warn(`Warn: ${message}`);
  }
}
