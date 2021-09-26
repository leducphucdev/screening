let steps: string[] = [];

class StateStep {
	private readonly step: string;
    private readonly notStepDuplicate: string = 'yellow';
    private readonly firstLoadPage: number;

	constructor(firstLoadPage: number = 1, step: string = '') {
        this.step = step;
        this.firstLoadPage = firstLoadPage;
    }
    
    checkState(): void {
        if (this.firstLoadPage) {
            this.resetSteps();
        }
        this.checkStepYellowDuplicate();
    }

    checkStepYellowDuplicate(): void {
        const step = this.step;
		if (step == this.notStepDuplicate && steps.indexOf(step) !== -1) {
            throw { error: 101, message: 'Step yellow already exists' };
		}
        return this.setSteps(step);
	}

	setSteps(step: string) {
		steps.push(step);
	}

	resetSteps(): void {
		steps = [];
    }
};

export default StateStep;