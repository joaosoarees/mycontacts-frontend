import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3003');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/fed420d1-ea09-425b-8dfc-8c71c2d0abfd?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
