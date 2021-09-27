/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import './index.css';

import { BoxColor, BoxReset } from '../../components';
import { RequestService } from '../../services';

class Home extends React.Component {
  state: any = {};

  stateDefalut: any = {
    step: 'blue',
    alert: {
      error: 0,
      message: '',
    }
  };

  firstLoadPage: number = 1;

  constructor(props: any) {
    super(props);
    this.state = this.cloneDeep(this.stateDefalut);
    this.handleResetState = this.handleResetState.bind(this);
    this.handleClickColor = this.handleClickColor.bind(this);
  }

  cloneDeep(data: any): object {
    return JSON.parse(JSON.stringify(data));
  }

  async handleResetState(): Promise<void> {
    const state = this.cloneDeep(this.stateDefalut);
    this.setState(state);
    await new RequestService().put('api/step/reset', {});
  }

  async handleClickColor(value: any): Promise<void> {
    const state = this.state;
    const stepOld = this.cloneDeep(state.step);
    const stepNew = value.step;

    this.setState({ ...state, step: stepNew});
    if (stepNew !== stepOld) {
      const result = await new RequestService().put(`api/transition/${stepNew}`, {
        from_step: stepOld,
        first_load_page: this.firstLoadPage
      });
      
      if (result.error === 0) {
        this.setStateMessage(
          this.state,
          {
            error: 0,
            message: '',
          },
        );
      } else {
        this.setStateMessage({ ...state, step: stepOld }, result);
      }
    }

    this.pageLoadFoFirst();
  }

  setStateMessage(state: object, alert: any) {
    this.setState({ ...state, alert: alert});
  }

  pageLoadFoFirst() {
    if (this.firstLoadPage === 1) {
      this.firstLoadPage = 0;
    }
  }

  render() {
    const { step, alert } = this.state;

    return (
      <div className='container mx-auto md:text-xl md:text-2xl p-5 md:p-2'>
        <div className='color-error'>{alert.message}</div>
        <div className='grid grid-cols-3 grid-row-2 grid-flow-col h-screen'>
          <div className='col-span-2 grid grid-cols-2'>
            <div className='step'>
              <BoxColor 
                step='blue'
                state={step}
                onClick={this.handleClickColor}
                ></BoxColor>
            </div>
            <div className='step'>
              <div className='step__middle'>
                <BoxColor 
                  step='green'
                  state={step}
                  onClick={this.handleClickColor}
                ></BoxColor>
              </div>
              <div className='step__middle'>
                <BoxColor 
                  step='yellow'
                  state={step}
                  onClick={this.handleClickColor}
                ></BoxColor>
              </div>
            </div>
          </div>
          <div className='step'>
            <BoxReset onClick={this.handleResetState}></BoxReset>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
