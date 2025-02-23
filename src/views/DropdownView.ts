import DropdownViewModel from "../viewmodels/DropdownViewModel";

export default class DropdownView {
    private dropdown: HTMLDivElement;
    private button: HTMLDivElement;
    private viewModel: DropdownViewModel;
    get ViewModel(): DropdownViewModel {
        return this.viewModel;
    }

    constructor() {

        this.dropdown = document.querySelector('.dropdown') as HTMLDivElement;
        this.button = document.querySelector('.dropdown-button') as HTMLDivElement;
        this.viewModel = new DropdownViewModel();

        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        if (this.dropdown && this.button) {
            this.button.addEventListener('click', () => {
                this.viewModel.ToggleDropdown();
            });

            document.addEventListener('click', (event: Event) => {
                if (!this.dropdown.contains(event.target as Node)) {
                    this.viewModel.CloseDropdown();
                }
            });
        }
    }
}
