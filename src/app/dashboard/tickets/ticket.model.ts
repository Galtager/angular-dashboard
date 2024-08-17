export interface Ticket {
    id: string;
    title: string;
    request: string;
    status: TicketStatusEnum
}
export enum TicketStatusEnum {
    OPEN = 'open',
    CLOSE = 'close'
}