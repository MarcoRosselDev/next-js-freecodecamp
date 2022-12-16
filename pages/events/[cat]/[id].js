const EventPage = ({ data }) => {
  console.log(data);
  return <h1>Our Single Event</h1>;
};

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");

  // const { allEvents } = await import("/data/data.json"); es mas rapido asi
  const allEvents = data.allEvents;
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.filter((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
