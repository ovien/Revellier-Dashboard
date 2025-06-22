import { calculateTrendPercentage, cn } from "../app/Lib/utils";

const StatsCard = ({headerTitle, total, currentMonthCount, lastMonthCount}: StatsCard) => {
  const {trend, percentage} = calculateTrendPercentage(currentMonthCount, lastMonthCount);
  const isDecrement = trend === 'decrement';
  return (
    <article className="stats-card">
     <h3 className="text-base font-medium">
      {headerTitle}  
    </h3> 
    <div className="content">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl">{total}</h2>
          <div className="flex items-center gap-1">
            <figure className=" flex items-center gap-1">
              <img src={isDecrement ? '/assets/icons/arrow-down-red.svg' : '/assets/icons/arrow-up-green.svg'} alt="arrow" className="size-[20px]"/>
              <figcaption className={cn('text-sm font-medium mr-2', isDecrement ? 'text-red-500' : 'text-green-500')}>
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm text-dark-100 truncate">   Vs Last Month</p>
          </div>
        </div>
        <img src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`} className="xl: w-32 w-full h-full md:h-32 xl:h-full" alt="Trend Graph"/>
    </div>
    </article>
  )
}

export default StatsCard