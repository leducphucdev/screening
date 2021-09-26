import Blue from './blue';
import Green from './green';
import Yellow from './yellow';

class FactoryStep {
	private readonly step: string;
	private readonly instance: any;
	private readonly fromStep: string;

	constructor(step: any, fromStep: string) {
		this.step = step;
		this.fromStep = fromStep;
		switch (step) {
			case 'blue':
				this.instance = new Blue(fromStep);
				break;
			case 'green':
				this.instance = new Green(fromStep);
				break;
			case 'yellow':
				this.instance = new Yellow(fromStep);
				break;
		}
	}
	   
	nextStep(): any {
		if (!this.instance.nextStep()) {
			throw { error: 102, message: `Step ${this.step} can't next from ${this.fromStep}` };
		} else {
			return true;
		}
	}
};

export default FactoryStep;