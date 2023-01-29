import React from 'react';
import InputTextField from 'lib/components/InputTextField';
import TipButton from 'lib/components/TipButton';
import TipDisplay from 'lib/components/TipDisplay';
import dollar from 'lib/components/InputTextField/dollar.svg';
import classes from './App.module.css';

export const App = () => {
  const [person, setPerson] = React.useState(0);
  const [bill, setBill] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const handlePerson = e => setPerson(e.target.value);
  const handleBill = e => setBill(e.target.value);
  const handleTip = tipValue => setTip(tipValue);
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
        <section className={classes.container__buttons}>
          <TipButton tip={5} onClick={() => handleTip(5)} tipLabel="5%" />
          <TipButton tip={10} onClick={() => handleTip(10)} tipLabel="10%" />
          <TipButton tip={15} onClick={() => handleTip(15)} tipLabel="15%" />
        </section>
        <section className={classes.container__buttons}>
          <TipButton tip={25} onClick={() => handleTip(25)} tipLabel="25%" />
          <TipButton tip={50} onClick={() => handleTip(50)} tipLabel="50%" />
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
