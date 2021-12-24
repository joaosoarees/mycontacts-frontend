import { Link } from 'react-router-dom';

import { useEffect, useState, useMemo } from 'react';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Loader from '../../components/Loader';
import delay from '../../utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, setSearchTerm]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3003/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        await delay(500);

        const result = await response.json();

        setContacts(result);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => setIsLoading(false));
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      <S.InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
        />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}

        </strong>
        <Link to="/new">Novo Contato</Link>
      </S.Header>

      {filteredContacts.length > 0 && (
        <S.ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Flecha" />
          </button>
        </S.ListHeader>
      )}

      {filteredContacts.map((contact) => (
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

    </S.Container>
  );
}
