import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <Input placeholder="Nome" />

      <Select>
        <option value="123">instagram</option>
      </Select>
    </>
  );
}
