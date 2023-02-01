import React from 'react';
import InputTextField from 'lib/components/InputTextField';
import TipButton from 'lib/components/TipButton';
import CustomTip from 'lib/components/CustomTip';
import TipDisplay from 'lib/components/TipDisplay';
import dollar from 'lib/components/InputTextField/dollar.svg';
import man from 'lib/components/InputTextField/person.svg';
import classes from './App.module.css';

export const App = () => {
  // states for user inputs
  const [person, setPerson] = React.useState();
  const [bill, setBill] = React.useState();
  const [tip, setTip] = React.useState();
  const [customTip, setCustomTip] = React.useState();

  // handle functions for the states
  const handlePerson = event => {
    const personInput = event.target.value;
    const regexForPerson = /^\d{1,3}$/;
    if (personInput === '' || regexForPerson.test(personInput)) {
      setPerson(personInput);
    }
  };

  const handleBill = event => {
    const billInput = event.target.value;
    const regexForBill = /^\d{1,6}$/;
    if (billInput === '' || regexForBill.test(billInput)) {
      setBill(billInput);
    }
  };
  const handleTip = tipValue => setTip(tipValue);
  const handleCustomTip = event => {
    const customTipInput = event.target.value;
    const regexForBill = /^\d{1,2}$/;
    if (customTipInput === '' || regexForBill.test(customTipInput)) {
      setCustomTip(customTipInput);
    }
  }; 

  // check for error case and display error message
  const isPersonZero = person === '0';
  const errorMessage = () => (isPersonZero ? 'Cannot be zero' : null);
  const isBillZero = bill === '0';
  const errorMessageBill = () => (isBillZero ? 'Cannot be zero' : null);

  // to choose the tip value between buttons and custom tip input
  const finalTipValue = () => {
    if (!tip) {
      return customTip;
    }
    return tip;
  };

  const tipAmount = 0.0;
  const totalBill = 0.0;

  const billPerPerson = () => {
    if (person !== '0') {
      return bill / person;
    }
    return 0;
  };
  // to compute tip per person
  const computationsForTip = () => {
    if (bill !== 0 && person !== 0) {
      return (finalTipValue() / 100) * billPerPerson();
    }
    return tipAmount;
  };

  // to compute bill amount per person
  const computationsForBill = () => {
    if (bill !== 0 && person !== 0) {
      return computationsForTip() + billPerPerson();
    }
    return totalBill;
  };

  // to disable reset button when no inputs are given
  const disableResetBtn = () => {
    if (!bill || !(tip || customTip) || !person) {
      return true;
    }
    return false;
  };
  
  return (
    // main container of the UI
    <main className={classes.container}>
      {/* container for components that take inputs  */}
      <aside className={classes.container__input}>
        {/* input text field for taking bill amount */}
        <InputTextField
          value={bill}
          label="Bill"
          icon={dollar}
          errorMessage={errorMessageBill()}
          onChangeValue={handleBill}
        />

        <h3 className={classes.container__header}>Selected %</h3>
        {/* section for the tip buttons */}
        <section className={classes.container__buttons}>
          {/* tip value 5% */}
          <TipButton value={5} onClickButton={() => handleTip(5)} label="5%" />
          {/* tip value 10% */}
          <TipButton
            value={10}
            onClickButton={() => handleTip(10)}
            label="10%"
          />
          {/* tip value 15% */}
          <TipButton
            value={15}
            onClickButton={() => handleTip(15)}
            label="15%"
          />
          {/* tip value 25% */}
          <TipButton
            value={25}
            onClickButton={() => handleTip(25)}
            label="25%"
          />
          {/* tip value 50% */}
          <TipButton
            value={50}
            onClickButton={() => handleTip(50)}
            label="50%"
          />
          {/* input field for custom tip */}
          <CustomTip value={customTip} onChangeValue={handleCustomTip} />
        </section>

        {/* input field for taking the person count */}
        <InputTextField
          value={person}
          label="Number of person"
          icon={man}
          errorMessage={errorMessage()}
          onChangeValue={handlePerson}
        />
      </aside>

      {/* container for displaying the tip amount and total bill amount per person */}
      <aside className={classes.container__display}>
        {/* display component */}
        <TipDisplay
          totalBill={computationsForBill().toFixed(2)}
          tipAmount={computationsForTip().toFixed(2)}
          disableResetBtn={disableResetBtn()}
        />
      </aside>
    </main>
  );
};
