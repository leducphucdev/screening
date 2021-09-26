import ColorBase from './color-base';
import ColorStepInterface from './interface';

class Blue extends ColorBase implements ColorStepInterface {
	readonly stepsAllow: string[] = ['green', 'yellow'];

	nextStep(): boolean {
        const allow = this.stepsAllow.indexOf(this.fromStep);
        return allow !== -1 ? true : false;
	}
};

export default Blue;