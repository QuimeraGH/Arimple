export default class DropdownViewModel {

    private _isActive: boolean = false;
    public get IsActive(): boolean {
        return this._isActive;
    }

    public set IsActive(value: boolean) {
        this._isActive = value;
    }

    ToggleDropdown(): void {
        this._isActive = !this._isActive;
        this.updateDropdownView();
    }

    CloseDropdown(): void {
        this._isActive = false;
        this.updateDropdownView();
    }

    private updateDropdownView(): void {
        const dropdown = document.querySelector('.dropdown') as HTMLDivElement;
        if (dropdown) {
            if (this._isActive) {
                dropdown.classList.add('active');
            } else {
                dropdown.classList.remove('active');
            }
        }
    }

}