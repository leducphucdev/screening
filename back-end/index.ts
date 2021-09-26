import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import FactoryStep from './use-case/check-step';
import StateStep from './use-case/state-step';
import { transitionValidatorRules, transitionValidate } from './validations/step-validation';
import { SUCCESS, BAD_REQUEST } from './const/status-code';

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.put('/api/step/reset', (req: express.Request, res: express.Response) => {
  const stateStep = new StateStep();
  stateStep.resetSteps();

  return res.status(SUCCESS).json({
    error: 0,
    message: 'Reset step success',
  });
});

app.put('/api/transition/:step',
  transitionValidate(transitionValidatorRules()),
  (req: express.Request, res: express.Response) => {
    const step: any = req.params.step;
    const fromStep: string = req.body.from_step;
    const firstLoadPage: number = req.body.first_load_page;
    
    try {
      const factoryStep: FactoryStep = new FactoryStep(step, fromStep); 
      factoryStep.nextStep();

      const stateStep = new StateStep(firstLoadPage, step);
      stateStep.checkState();

      return res.status(SUCCESS).json({
        error: 0,
        message: 'Successful next step',
      });
    } catch (e: any) {
      return res.status(BAD_REQUEST).json(e);
    }
  }
);
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});