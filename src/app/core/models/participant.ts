export interface Participant {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly personalNumber: string;
  readonly dateOfBirth?: string;
}