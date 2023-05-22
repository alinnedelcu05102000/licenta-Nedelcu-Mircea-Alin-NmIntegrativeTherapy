
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Log-in.scss';

const LoginForm = () => {
  return (
    <div className='form-test'>
    <Navbar></Navbar>
    <div className='main-form'>
      <input type='checkbox' id='chk' aria-hidden='true'></input>
      <div className='signup'>
        <form>
          <label for ='chk' aria-hidden='true'>Creare Cont</label>
          <input type="text" name="username" placeholder="Introduceti numele de utilizator"></input>
      <input type="text" name="first_name"  placeholder="Introduceti numele de familie"></input>
      <input type="text" name="last_name"  placeholder="Introduceti prenumele"></input>
      <input type="text" name="email"  placeholder="Introduceti adresa de email"></input>
      <input type="text" name="phone"  placeholder="Introduceti numarul de telefon"></input>
      <input type="password" name="password"  placeholder="Introduceti parola"></input>
      <button>Creaza Cont</button>
        </form>
      </div>

      <div className='login'>
        <form>
          <label for='chk' aria-hidden='true'>Accesare Cont</label>
          <input type="text" name="username" placeholder="Introduceti numele de utilizator" required></input>
          <input type="password" name="password" placeholder="Introduceti parola" required></input>
          <button>Acceseaza</button>
        </form>
      </div>

    </div>
    </div>
  );
};

export default LoginForm;

