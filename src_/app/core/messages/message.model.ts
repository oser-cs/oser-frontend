export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface Message {
  text: string;
  type: MessageType;
}
