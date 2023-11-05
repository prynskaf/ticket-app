import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("fetch error");
  }
  return res.json();
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
  }
  return <TicketForm />;
};

export default TicketPage;
