import Trophe1 from '../assets/trophe1.svg'
import Trophe2 from '../assets/trophe2.svg'
import Trophe3 from '../assets/trophe3.svg'

export default function Podium1() {

    const classment = [

        {
            icon: Trophe2,
            size: 'w-16 sm:w-20 md:w-28 -rotate-12',
            alt: 'Place 2',
        },
        {
            icon: Trophe1,
            size: 'w-20 mb-10 sm:w-24 md:w-36',
            alt: 'Place 1',
        },
        {
            icon: Trophe3,
            size: 'w-16 sm:w-20 md:w-28 rotate-12',
            alt: 'Place 3',

        }
    ]

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-10'>
            <header>
                <h1 className='text-2xl text-center font-bold'>Podium 1</h1>
            </header>
            <main className='w-11/12 max-w-[500px] min-h-[300px] flex justify-center gap-10 border rounded-md'>
                {
                    classment.map((el, index) =>
                    <img key={index} className={el.size} src={el.icon} alt={el.alt} />
                )}
            </main>
        </div>
    )
}