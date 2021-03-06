import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Wrapper, Content, List } from './styles';

export default function Friend() {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    async function loadFriends() {
      const response = await api.get('friends');

      // alert(response.request);
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
              </li>
            ))}
          </List>
          <Link to="/secret">Gerar amigos secretos e enviar e-mails</Link>
        </Content>
      </Wrapper>
    </>
  );
}
