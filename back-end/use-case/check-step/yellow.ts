import ColorBase from './color-base';
import ColorStepInterface from './interface';

class Yellow extends ColorBase implements ColorStepInterface {
    readonly allow: string = 'blue';
	   
	nextStep(): boolean {
        return this.fromStep === this.allow;
	}
};

export default Yellow;