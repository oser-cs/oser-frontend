import { IAdapter, Address, User, UserAdapter, AddressAdapter } from 'app/core';
import { Form, FormAdapter } from 'app/dynamic-forms';

export class RecipientSchema {
  user: User;
  address: Address;
}

export class Recipient extends RecipientSchema {

  constructor(args: RecipientSchema) {
    super();
    Object.assign(this, args);
  }
}

export class RecipientAdapter implements IAdapter<Recipient> {

  private userAdapter = new UserAdapter();
  private addressAdapter = new AddressAdapter();

  adapt(data: any): Recipient {
    return new Recipient({
      user: this.userAdapter.adapt(data.user),
      address: this.addressAdapter.adapt(data.address),
    })
  }
}

export class EditionFormSchema {
  id: number;
  editionId: number;
  deadline: Date;
  recipient: Recipient;
  form: Form;
}

export class EditionForm extends EditionFormSchema {

  constructor(args: EditionFormSchema) {
    super();
    Object.assign(this, args);
  }

  get open(): boolean {
    const now = new Date();
    return now <= this.deadline;
  }
}


export class EditionFormAdapter implements IAdapter<EditionForm> {

  private recipientAdapter = new RecipientAdapter();
  private formAdapter = new FormAdapter();

  adapt(data: any): EditionForm {
    return new EditionForm({
      id: data.id,
      editionId: data.edition,
      deadline: new Date(data.deadline),
      recipient: data.recipient ? this.recipientAdapter.adapt(data.recipient) : null,
      form: this.formAdapter.adapt(data.form),
    })
  }
}


export class EditionFormSimpleAdapter implements IAdapter<EditionForm> {

  adapt(data: any): EditionForm {
    return new EditionForm({
      id: data.id,
      editionId: data.edition,
      deadline: new Date(data.deadline),
      recipient: null,
      form: null,
    })
  }
}
