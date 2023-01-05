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
//    background-color: hsl(220, 27%, 17%);

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

const StepForma: NextPage = () => {
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
                  <div>
            <Head>
                <title>Create Wagmi Dapp</title>
                <meta name="description" content="Generated by create next wagmi dapp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <BasciConnect></BasciConnect>
            </div>
        </div>
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
            />
          </>
        );
      case 2:
        return (
          <>      <div>
          <Head>
              <title>Create Wagmi Dapp</title>
              <meta name="description" content="Generated by create next wagmi dapp" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
              <BasciConnect></BasciConnect>
          </div>
      </div>
            <h2>Step 2</h2>
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formValues.email || ''}
            />
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formValues.phone || ''}
            />                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
          </>
        );
      case 3:
        return (
          <>      <div>
          <Head>
              <title>Create Wagmi Dapp</title>
              <meta name="description" content="Generated by create next wagmi dapp" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
              <BasciConnect></BasciConnect>
          </div>
      </div>
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
            />                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>

          </>
        );
      case 4:
        return (
          <>      <div>
          <Head>
              <title>Create Wagmi Dapp</title>
              <meta name="description" content="Generated by create next wagmi dapp" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
              <BasciConnect></BasciConnect>
          </div>
      </div>
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
            />                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>

          </>
        );
      case 5:
        return (
          <>      <div>
          <Head>
              <title>Create Wagmi Dapp</title>
              <meta name="description" content="Generated by create next wagmi dapp" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
              <BasciConnect></BasciConnect>
          </div>
      </div>
            <h2>Step 5</h2>
            <p>
              Thank you for completing the form! Here is a summary of your
              responses:
            </p>
            <ul>
              <li>
                First Name: {formValues.firstName}
              </li>
              <li>
                Last Name: {formValues.lastName}
              </li>
              <li>
                Email: {formValues.email}
              </li>
              <li>
                Phone Number: {formValues.phone}
              </li>
              <li>
                Address: {formValues.address}
              </li>
              <li>
                City: {formValues.city}
              </li>
              <li>
                State: {formValues.state}
              </li>
              <li>
                Country: {formValues.country}
              </li>
              <li>
                Postal Code: {formValues.postalCode}
              </li>
            </ul>                 <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>

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
        <button type="submit">Next</button>
      )}
    </form>
  );
};

export default StepForma;