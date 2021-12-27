let invoices = [
  {
        id : 1 ,
        type : "Arts",
        eventName : "drawing efficacy1",
        location :"Aljouf",
        time:"12-12-2020",
        duration :"2 Days",
  },
  {
    id : 2 ,
    type : "Sports",
    eventName : "Football",
    location :"Tabuk",
    time:"30-12-2021",
    duration :"2:30 H",
},
{
  id : 3 ,
  type : "Shopping",
  eventName : "Perfume efficacy",
  location :"Aljouf",
  time:"28-12-2021",
  duration :"5 H",
},
];
export function getInvoices() {
  return invoices;
}
export function getInvoice(id) {
  return invoices.find(
    invoice => invoice.id === id
  );
}