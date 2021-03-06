import { Injectable, Logger, LoggerService } from "@nestjs/common";

@Injectable()
export class Sum implements IValue {
    private readonly logger: LoggerService = new Logger(Sum.name);

    constructor(
        private readonly list: IValue[],
    ) {}

    calc(): number {
        this.logger.log('calc(). Сумирование.');
        return this.list[0].calc() + this.list[1].calc();
    }

    clone(): Sum {
        this.logger.log('clone()');
        const newList = this.list.map(current => current.clone());
        return new Sum(newList);
    }
}