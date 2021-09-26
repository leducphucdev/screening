import ColorBase from './color-base';
import ColorStepInterface from './interface';

class Green extends ColorBase implements ColorStepInterface {
    private readonly allow: string = 'blue';
	   
	nextStep(): boolean {
        return this.fromStep === this.allow;
	}
};

export default Green;