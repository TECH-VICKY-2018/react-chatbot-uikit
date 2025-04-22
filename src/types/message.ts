export interface ChatMessage {
  id: string;
  type: 'CLIENT' | 'SERVER';
  content: string;
}
