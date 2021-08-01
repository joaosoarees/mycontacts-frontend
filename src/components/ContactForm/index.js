import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import * as S from './styles';

export default function ContactForm({ buttonLabel }) {
  return (
    <S.Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido."
      >
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">instagram</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
