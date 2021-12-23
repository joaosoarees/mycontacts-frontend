import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/contacts')
      .then(async (response) => {
        const result = await response.json();

        setContacts(result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {contacts.length}
          {' '}
          {contacts.length === 1 ? 'contato' : 'contatos'}

        </strong>
        <Link to="/new">Novo Contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Flecha" />
          </button>
        </header>

        {contacts.map((contact) => (
          <S.Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Editar" />
              </Link>
              <button type="button">
                <img src={trash} alt="Deletar" />
              </button>
            </div>
          </S.Card>
        ))}

      </S.ListContainer>
    </S.Container>
  );
}
