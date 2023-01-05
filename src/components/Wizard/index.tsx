import { useState } from 'react';
import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Step from '@material-ui/core/Stepper';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/Stepper';
import { BasciConnect } from "components/ConnectWallet";
import { Header } from "components/Header";

type Step = 1 | 2 | 3 | 4 | 5;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '90%',
      },
    },
    stepper: {
      backgroundColor: 'transparent',
    },
    stepLabel: {
      fontSize: '1.2rem',
    },
    button: {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

const StepForm: React.FC = () => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formValues, setFormValues] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setFormValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {

      case 1:
        return (
          <>
<div style={{
    display: 'flex-row',
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
}}>
       
            <h2>Provide a Name Service</h2>
            <TextField
              label="Endpoint"
              name="provider"
              onChange={handleChange}
              value={formValues.provider || ''}
            />
            <TextField
              label="Address"
              name="address"
              onChange={handleChange}
              value={formValues.address || ''}
            />          </div>

          </>
        );
      case 2:
        return (
          <>      <div style={{
            display: 'flex-row',
            padding: '10%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h2>Provide an API Endpoint</h2>
            <TextField
              label="HTTP URL"
              type="email"
              name="email"
              onChange={handleChange}
              value={formValues.email || ''}
            />
            <TextField
              label="Request Header, Body "
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formValues.phone || ''}
            />                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>      </div>

          </>
        );
      case 3:
        return (
          <>        <div style={{
            display: 'flex-row',
            padding: '10%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h2>Step 3</h2>
            <TextField
              label="Address"
              name="address"
              onChange={handleChange}
              value={formValues.address || ''}
            />
            <TextField
              label="City"
              name="city"
              onChange={handleChange}
              value={formValues.city || ''}
            />
            <TextField
              label="State"
              name="state"
              onChange={handleChange}
              value={formValues.state || ''}
            />                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button> </div>

          </>
        );
      case 4:
        return (
          <>       <div style={{
            display: 'flex-row',
            padding: '10%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h2>Step 4</h2>
            <TextField
              label="Country"
              name="country"
              onChange={handleChange}
              value={formValues.country || ''}
            />
            <TextField
              label="Postal Code"
              name="postalCode"
              onChange={handleChange}
              value={formValues.postalCode || ''}
            />                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button></div>

          </>
        );
      case 5:
        return (
          <>      <div style={{
            display: 'flex-row',
            padding: '10%',
            alignItems: 'center',
            justifyContent: 'center',
        color: 'rgb(22, 122, 252)'
        }}>
            <h2>Step 5</h2>
            <p>
              Confirm Oracle Endpoint Creation with these Parameters:
            </p>
            <ul>
              <li>
                Name Service: {formValues.firstName}
              </li>
              <li>
                Address: {formValues.lastName}
              </li>
              <li>
                API: {formValues.email}
              </li>
              <li>
                JSON: {formValues.phone}
              </li>
              <li>
                Price Curve: {formValues.address}
              </li>
              <li>
                Max Supply: {formValues.city}
              </li>
              <li>
                Gas: {formValues.state}
              </li>
              <li>
                Region: {formValues.country}
              </li>
              <li>
                Logo: {formValues.postalCode}
              </li>
            </ul>                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button></div>

          </>
        );
      default:
        return null;
    }
  };

  return ( 
    <form onSubmit={handleSubmit}>
      {renderStep()}
      {currentStep < 5 && (
     <div style={{
        display: 'flex-column',
        padding: '10%',
        alignItems: 'left',
        justifyContent: 'left',
        color: 'rgb(22, 122, 252)'

    }}>   <button type="submit">Next</button></div>
      )}
    </form>
  );
};

export default StepForm;