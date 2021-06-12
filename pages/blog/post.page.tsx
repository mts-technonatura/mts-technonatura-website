export default function BlogPostPage() {
  return (
    <>
      <div className='container px-5 mx-auto lg:px-32'>
        <div className='flex flex-col w-full mb-2 text-left '>
          <h1 className='mb-2 text-3xl font-black tracking-tightertext-black lg:text-7xl md:text-4xl'>
            {' '}
            Page transitions are a fundamental..{' '}
          </h1>
          <p className='mt-4 text-lg leading-snug tracking-tight text-blueGray-500 lg:w-2/3'>
            {' '}
            Through the lens of a set of certitudes based on deductions founded
            on false premise.{' '}
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:space-x-12'>
          <div
            className='w-full max-w-screen-sm m-auto mt-12 lg:w-1/4'
            style={{ position: 'sticky', top: '20px' }}
          >
            <div className='p-4 transition duration-500 ease-in-out transform bg-white border rounded-lg '>
              <div className='flex py-2'>
                <img
                  src='https://avatars.githubusercontent.com/u/67791514?v=4'
                  className='object-cover w-10 h-10 mr-2 rounded-full'
                />
                <div>
                  <p className='text-sm font-semibold tracking-tight text-black '>
                    {' '}
                    Aldhanekaa
                  </p>
                  <p className='text-sm font-normal tracking-tight text-coolGray-400'>
                    {' '}
                    Project Owner
                  </p>
                </div>
              </div>
              <button className='w-full px-8 py-2 mt-4 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800'>
                {' '}
                Follow
              </button>
            </div>
          </div>
          <div className='w-full px-4 mt-12 text-lg leading-snug tracking-tight text-blueGray-500 lg:px-0 lg:w-3/4'>
            <p className='pb-6'>
              Turd polishing put a record on and see who dances, dog and pony
              show, nor one-sheet. Ensure to follow requirements when developing
              solutions three-martini lunch, that jerk from finance really threw
              me under the bus. Bob called an all-hands this afternoon.
            </p>
            <p className='pb-6'>
              We've got kpis for that this is a no-brainer viral engagement
              pixel pushing. Run it up the flagpole please use "solutionise"
              instead of solution ideas! :) dunder mifflin form without content
              style without meaning target rich environment. Three-martini
              lunch. Get buy-in prioritize these line items, or deliverables yet
              back to the drawing-board let's put a pin in that, close the loop.
              Manage expectations product market fit win-win-win. The horse is
              out of the barn poop, but can you put it on my calendar? but drink
              from the firehose, but quick-win.{' '}
            </p>
            <div className='p-4 pl-4 mb-6 italic font-bold tracking-tight text-gray-300 border border-gray-800 rounded-lg bg-black lg:text-4xl'>
              {' '}
              "Focus on the customer journey"{' '}
            </div>
            <p className='pb-6'>
              If you could do that, that would be great this is a no-brainer, or
              Q1 regroup. Groom the backlog what do you feel you would bring to
              the table if you were hired for this position. Back of the net.
              Scope creep can you slack it to me? shotgun approach build on a
              culture of contribution and inclusion please advise soonest.
            </p>
            <h2 className='mt-4 mb-4 text-3xl font-bold text-black '>
              Is a no-brainer, or Q1 regroup.
            </h2>
            <p className='pb-6'>
              Gain traction make it more corporate please we need to harvest
              synergy effects not enough bandwidth, and we want to empower the
              team with the right tools and guidance to uplevel our craft and
              build better nor low-hanging fruit the right info at the right
              time to the right people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
