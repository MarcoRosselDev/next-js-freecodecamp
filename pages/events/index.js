const EventsPage = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>

      <div>
        <a href="">
          <img /> <h2>Events in London</h2>{" "}
        </a>
        <a href="">
          <img /> <h2>Events in San Francisco</h2>{" "}
        </a>
        <a href="">
          <img /> <h2>Events in Barcelona</h2>{" "}
        </a>
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
