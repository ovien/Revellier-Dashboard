import { Link, useLocation } from "react-router";

interface TripCardProps {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  tags: string[];
  price: string;
}

const TripCard = ({id, name, imageUrl, location, tags, price}: TripCardProps) => {
  const path = useLocation();
  
  return (
    <Link to={path.pathname === '/' || path.pathname.startsWith('/travel')
      ? `/travel/${id}` : `/trips/${id}`} className="trip-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="trip-card-content p-4 min-h-[120px] flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm mb-3">{location}</p>
          <div className="tags mb-3">
            {tags && tags.length > 0 && tags[0] !== "" && tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="tag inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mr-2 mb-1">{tag}</span>
            ))}
          </div>
        </div>
        <article className="tripCard-pill text-right">
          <span className="text-lg font-bold text-green-600">{price}</span>
        </article>
      </div>
    </Link>
  )
}

export default TripCard