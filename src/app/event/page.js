import EventCard from "@/components/EventCard";
import FlickeringGrid from "@/components/ui/flickering-grid";


const events = [
  {
    id: 1,
    image: '/images/event1.jpg', // Add your image path
    name: 'Event 1',
    description: 'This is the description for Event 1.',
  },
  {
    id: 2,
    image: '/images/event2.jpg',
    name: 'Event 2',
    description: 'This is the description for Event 2.',
  },
  {
    id: 3,
    image: '/images/event3.jpg',
    name: 'Event 3',
    description: 'This is the description for Event 3.',
  },
  {
    id: 4,
    image: '/images/event4.jpg',
    name: 'Event 4',
    description: 'This is the description for Event 4.',
  },
  {
    id: 5,
    image: '/images/event5.jpg',
    name: 'Event 5',
    description: 'This is the description for Event 5.',
  },
];

const EventsPage = () => {
  return (
    <div className="container mx-auto p-4">
        <FlickeringGrid 
            className=" -z-10 absolute bg-gradient inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
        />

        <h1 className="text-4xl mt-16 font-bold text-center mb-8">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events.map(event => (
            <EventCard
                key={event.id}
                image={event.image}
                name={event.name}
                description={event.description}
            />
            ))}
        </div>
    </div>
  );
};

export default EventsPage;
