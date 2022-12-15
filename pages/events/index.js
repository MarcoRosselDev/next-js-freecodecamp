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

export function getServerSideProps() {
  return {
    props: {
      title: "Hello everyone!",
    },
  };
}
