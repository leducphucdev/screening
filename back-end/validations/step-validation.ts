import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult, ValidationError, ValidationChain, Result } from 'express-validator';
import { STEPS } from '../const/steps';

export const transitionValidate = (validations: ValidationChain[]): any => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map(validation => validation.run(req)));
	
		const errors: Result<ValidationError> = validationResult(req);
		if (errors.isEmpty()) {
			return next();
		}
		const extractedErrors: any[] = [];
		errors.array().map(err => extractedErrors.push(err.msg));
	
		return res.status(400).json({
			error: 100,
			message: extractedErrors[0],
		});
	};
};

export const transitionValidatorRules = (): ValidationChain[] => [
	param('step').isIn(STEPS).withMessage('Step is not valid'),
	body('from_step').isIn(STEPS).withMessage('Start step is not valid'),
	body('first_load_page').isInt().withMessage('First load page is not valid'),
];