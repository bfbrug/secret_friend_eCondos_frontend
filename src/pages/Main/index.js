import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { addRequest } from '../../store/modules/friend/actions';

import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail')
    .required('E-mail é obrigatório'),
});

export default function Main() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email }) {
    dispatch(addRequest(name, email));
    // alert(name, email);
  }
  return (
    <>
      <Wrapper>
        <Content>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="email" type="email" placeholder="Email" />

            <button type="submit">Cadastrar</button>
            <Link to="/friend">Listar amigos cadastrados</Link>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
