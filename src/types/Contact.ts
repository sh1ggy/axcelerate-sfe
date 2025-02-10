export const contactsInit = [
  { name: "Jane Doe", email: "Jane.Doe@test.com", status: "Attended" },
  { name: "Park Ng", email: "Park.Ng@test.com", status: "Absent" },
  { name: "Jane Park", email: "Jane.Park@test.com", status: "Absent" },
  { name: "John Pork", email: "John.Pork@test.com", status: "Attended" },
  { name: "James Dean", email: "James.Dean@test.com", status: "Attended" },
  { name: "Jimmy Lee", email: "Jimmy.Lee@test.com", status: "Attended" },
];

export interface Contact {
  name: string;
  email?: string;
  status: string;
}
