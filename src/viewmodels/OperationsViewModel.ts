import { Operations } from "../assets/Operations";

export class OperationsViewModel {
    private _operation: Operations;
    
    constructor() {
        this._operation = Operations.ADD;
    }

    get Operation(): Operations {
        return this._operation;
    }

    set Operation(op: Operations) {
        if (Object.values(Operations).includes(op)) {
            this._operation = op;
        } else {
            console.log("Invalid operation to set!")
        }
    }

    private _num1: number = 0;
    get Num1(): number {
        return this._num1;
    }

    set Num1(num: number) {
        if (typeof num === 'number' && !isNaN(num)) {
            this._num1 = num;
        } else {
            throw new Error("Num1 debe ser un número válido.");
        }
    }

    private _num2: number = 0;
    get Num2(): number {
        return this._num2;
    }

    set Num2(num: number) {
        if (typeof num === 'number' && !isNaN(num)) {
            this._num2 = num;
        } else {
            throw new Error("Num2 debe ser un número válido.");
        }
    }

    UpdateInputs(num1: number, num2: number) {
        this.Num1 = num1;
        this.Num2 = num2;
    }

    SetOperationFromHtml(operation: string): void {
        this.Operation = operation.trim() as Operations;
    }

    PerformOperation(): string {
        switch (this.Operation) {
            case Operations.ADD:
                return String(this.Num1 + this.Num2);
            case Operations.SUBTRACT:
                return String(this.Num1 - this.Num2);
            case Operations.MULTIPLY:
                return String(this.Num1 * this.Num2);
            case Operations.DIVIDE:
                if (this.Num2 == 0) {
                    return "Can't divide by zero!";
                } else {
                    return String(this.Num1 / this.Num2);
                }
        }
    }
}
