import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Wrapper, Content, List } from './styles';

export default function Friend() {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    async function loadFriends() {
      await api.put('secrets');
      const response = await api.get('friends');

      setFriend(response.data);
    }

    loadFriends();
  }, []);

  return (
    <>
      <Wrapper>
        <Content>
          <h1>Amigos cadastrados</h1>
          <List>
            {friend.map(f => (
              <li key={f.id}>
                <span>
                  <strong>Nome: </strong> {f.name}
                </span>
                <span>
                  <strong>E-mail: </strong> {f.email}
                </span>
                <span>
                  <strong>Amigo Secreto: </strong> {f.secret_name}
                </span>
              </li>
            ))}
          </List>
          <Link to="/">Cadastrar amigos</Link>
        </Content>
      </Wrapper>
    </>
  );
}
