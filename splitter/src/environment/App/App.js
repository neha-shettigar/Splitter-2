import React, {useState} from 'react';
import InputTextField from 'lib/components/InputTextField';
import TipButton from 'lib/components/TipButton';
import CustomTip from 'lib/components/CustomTip';
import TipDisplay from 'lib/components/TipDisplay';
import dollar from 'lib/components/InputTextField/dollar.svg';
import classes from './App.module.css';

export const App = () => {
  const [person, setPerson] = useState('a');
  const [bill, setBill] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [customTip, setCustomTip] = React.useState('');
  const handlePerson = event => {
    setPerson(event.target.value);
  };
  const handleBill = event => setBill(event.target.value);
  const handleTip = tipValue => setTip(tipValue);
  const handleCustomTip = event => setCustomTip(event.target.value);
  const isPersonZero = person === 0;
  const errorMessage = isPersonZero ? `Cannot be zero` : ``;
  const isBillZero = bill === 0;
  const errorMessageBill = isBillZero ? `Cannot be zero` : ``;
  return (
    <main className={classes.container}>
      <aside className={classes.container__input}>
        <InputTextField
          input={bill}
          hanleInput={handleBill}
          inputLabel="Bill"
          image={dollar}
          errorMessage={errorMessageBill}
        />
        <h3 className={classes.container__header}>Selected %</h3>
        <section className={classes.container__buttons}>
          <TipButton tip="5" onClick={() => handleTip(tip)} tipLabel="5%" />
          <TipButton tip="10" onClick={() => handleTip('10')} tipLabel="10%" />
          <TipButton tip="15" onClick={() => handleTip('15')} tipLabel="15%" />
        </section>
        <section className={classes.container__buttons}>
          <TipButton tip="25" onClick={() => handleTip('25')} tipLabel="25%" />
          <TipButton tip="50" onClick={() => handleTip('50')} tipLabel="50%" />
          <CustomTip customTip={customTip} handleCustomTip={handleCustomTip} />
        </section>
        <InputTextField
          input={person}
          hanleInput={handlePerson}
          inputLabel="Number of person"
          image={dollar}
          errorMessage={errorMessage}
        />
      </aside>
      <aside className={classes.container__display}>
        <TipDisplay />
      </aside>
    </main>
  );
};
