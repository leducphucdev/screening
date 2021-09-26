let steps: string[] = [];

class StateStep {
	readonly step: string;
    readonly notColorDuplicate: string = 'yellow';
    readonly firstLoadPage: number;

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
		if (step == this.notColorDuplicate && steps.indexOf(step) !== -1) {
            throw { error: 101, message: 'Step yellow step already exists' };
		} else {
			this.setSteps(step);
		}
	}

	setSteps(step: string) {
		steps.push(step);
	}

	resetSteps(): void {
		steps = [];
    }
};

export default StateStep;