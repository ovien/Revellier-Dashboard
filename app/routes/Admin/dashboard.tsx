import { Header, StatsCard, TripCard } from "Components"
import { dashboardsSats, user, allTrips } from "app/constants/index"


const Dashboard = () => {
  

  const {totalUsers, usersJoined, totalApplications, applicationsSubmitted, tripsCompleted, userTrips} = dashboardsSats;

  return (
    <main className="dashboard wrapper">
      <Header title={`Welcome ${user?.name ?? 'Guest'} 👋🏽`}
      description={`Track Activity, Applications, Trends and popular destinations in real time!`}/>

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users Joined"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total User Applications"
            total={totalApplications}
            currentMonthCount={applicationsSubmitted.currentMonth}
            lastMonthCount={applicationsSubmitted.lastMonth}
          />
          <StatsCard
            headerTitle="Your Trip Stats"
            total={userTrips}
            currentMonthCount={tripsCompleted.currentMonth}
            lastMonthCount={tripsCompleted.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice}) => (
            <TripCard 
              key={id} 
              id={id.toString()} 
              name={name} 
              imageUrl={imageUrls[0]} 
              location={itinerary[0]?.location ?? ''} 
              tags={tags} 
              price={estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dashboard