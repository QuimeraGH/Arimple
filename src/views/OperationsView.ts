import { OperationsViewModel } from "../viewmodels/OperationsViewModel";
import DropdownView from "./DropdownView";

export default class OperationsView {
    private _button: HTMLDivElement;
    private _calculateButton: HTMLDivElement;
    private _input1: HTMLInputElement;
    private _input2: HTMLInputElement;
    private _resultP: HTMLParagraphElement;
    private _viewModel: OperationsViewModel;
    private _dropDownView: DropdownView;

    constructor(dropdownView: DropdownView) {
        this._viewModel = new OperationsViewModel();
        this._dropDownView = dropdownView;
        
        this._button = document.querySelector(".dropdown-button") as HTMLDivElement;
        this._calculateButton = document.querySelector(".calculate-button") as HTMLDivElement;
        this._input1 = document.getElementById("input1") as HTMLInputElement;
        this._input2 = document.getElementById("input2") as HTMLInputElement;
        this._resultP = document.getElementById("result-p") as HTMLParagraphElement;

        this.setupEventListeners();
        this.updateButtonText();
    }

    private setupEventListeners(): void {
        let operationClicked = document.querySelectorAll('.opera');
        operationClicked.forEach((op) => {
            op.addEventListener("click", () => {
                this._viewModel.SetOperationFromHtml(op.innerHTML);
                this.updateButtonText();
                this._dropDownView.ViewModel.CloseDropdown();
            });
        });

        if (this._calculateButton) {
            this._calculateButton.addEventListener("click", () => {
                this.SetOperationResult();
            });
        }

        if (this._input1 && this._input2) {
            this._input1.addEventListener("keypress", ValidateNumbers.filterInvalidCharacters);
            this._input2.addEventListener("keypress", ValidateNumbers.filterInvalidCharacters);
        
            const onInputChange = () => {
                const num1 = ValidateNumbers.tryParseNumber(this._input1.value);
                const num2 = ValidateNumbers.tryParseNumber(this._input2.value);
        
                if (num1 !== null && num2 !== null) {
                    this._viewModel.UpdateInputs(num1, num2);
                } else {
                    this.restartInputs();
                }
            };
        
            this._input1.addEventListener("input", onInputChange);
            this._input2.addEventListener("input", onInputChange);
        }        

    }

    private updateButtonText(): void {
        this._button.innerHTML = this._viewModel.Operation;
        console.log("Updated button text!");
    }

    public SetOperationResult(): void {
        let result: string = this._viewModel.PerformOperation();
        this._resultP.innerHTML = result;
        
        // Restart animation
        this._resultP.style.animation = "none";
        this._resultP.offsetWidth; // Force reflow
        this._resultP.style.animation = "grow-p 0.5s ease forwards"; // Ensure opacity stays at 1
    }
    
    private restartInputs(): void {
        this._input1.value = "";
        this._input2.value = "";
        this._resultP.innerHTML = "Por favor ingrese números válidos!";
    }

}

export class ValidateNumbers {
    static tryParseNumber(num: any): number | null {
        const numTrimmed = String(num).trim();
        const numChecked = Number(numTrimmed);
        return !isNaN(numChecked) ? numChecked : null;
    }

    static filterInvalidCharacters(event: KeyboardEvent): void {
        if (!/[\d.]/.test(event.key) && event.key !== "Backspace") {
            event.preventDefault();
        }
    }
}
