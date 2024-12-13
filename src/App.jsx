import React, { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    tel: '',
    email: '',
    password: '',
    password2: '',
    passwordConfirm: false
  })

  const [isError, setError] = useState('');

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
        ...form,
        [name]: type === 'checkbox' ? checked : value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.surname || !form.tel || !form.email || !form.password || !form.password2) {
      setError('Заполните все поля!');
      return
    }

    if (form.password !== form.password2) {
      setError('Пароли не совпадают!');
      return;
    }

    if (!form.passwordConfirm) {
      setError('Подтвердите пароль!');
      return;
    }

    setError('');

    alert('Вы успешно зарегистрированы!');
  };


  return (
    <div className='container'>
      <h2 className='title'>Создание аккаунта</h2>
      <p className='description'>Введите свои данные, чтобы создать аккаунт в сервисе</p>

      <form onSubmit={handleSubmit}>
        <div className='inputs__wrapper'>
          <input
            className='form__input'
            type="text"
            name="name"
            placeholder='Имя'
            value={form.name}
            onChange={handleInputChange} />
          <input
            className='form__input'
            type="text"
            name="surname"
            placeholder='Фамилия'
            value={form.surname}
            onChange={handleInputChange} />
          <input
            className='form__input'
            type="tel"
            name="tel"
            placeholder='Номер телефона'
            value={form.tel}
            onChange={handleInputChange} />
          <input
            className='form__input'
            type="email"
            name="email"
            placeholder='Email'
            value={form.email}
            onChange={handleInputChange} />
          <input
            className='form__input'
            type="password"
            name="password"
            placeholder='Пароль'
            value={form.password}
            onChange={handleInputChange} />
          <input
            className='form__input'
            type="password"
            name="password2"
            placeholder='Повторите пароль'
            value={form.password2}
            onChange={handleInputChange} />
        </div>

        <div className='confirm__wrapper'>
          <input
            className='confirm__input'
            type="checkbox"
            name="passwordConfirm"
            id='confirm'
            checked={form.passwordConfirm}
            onChange={handleInputChange} />
          <label className='confirm__label' htmlFor="confirm">Подтверждаю пароль</label>
        </div>

        <div className='button__wrapper'>
          <button
            type='submit'
            className='button'
            disabled={false} >
            Продолжить
          </button>

          { isError && (<p className='error'>{isError}</p>) }
        </div>
      </form>

      <div className='sign-in__wrapper'>
        <label className='sign-in__label' htmlFor="sign-in">Уже есть аккаунт ? </label>
        <a className='sign-in__link' href="#" id='sign-in'>Войти →</a>
      </div>
    </div>
  )
}

export default App
