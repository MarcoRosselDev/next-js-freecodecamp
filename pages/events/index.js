import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div>
      {data.map((ev) => (
        <Link href={`/events/${ev.id}`} passHref>
          <Image
            key={ev.id}
            src={ev.image}
            alt={ev.title}
            width={300}
            height={300}
          />
          <h2>{ev.title}</h2>
        </Link>
      ))}
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
