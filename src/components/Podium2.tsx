import Top1 from '../assets/podium2/top1.svg'
import Top2 from '../assets/podium2/top2.svg'
import Top3 from '../assets/podium2/top3.svg'

export default function Podium2() {
    const classment = [

        {
            icon: Top2,
            size: 'flex justify-center bg-red-600 w-full h-4/6 rounded-t-md ',
            alt: 'Place 2',

        },
        {
            icon: Top1,
            size: 'flex justify-center bg-orange-600 w-full h-5/6 rounded-t-md ',
            alt: 'Place 1',

        },
        {
            icon: Top3,
            size: 'flex justify-center bg-violet-600 w-full h-3/6 rounded-t-md ',
            alt: 'Place 3',

        }
    ]

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-10'>
            <header>
                <h1 className='text-2xl text-center font-bold'>Podium 2</h1>
            </header>
            <main className='w-11/12 max-w-[500px] min-h-[300px] flex justify-center items-end gap-5 border-b border-black'>
                {classment.map((el, index) =>
                <article key={index} className={el.size}>
                    <img className='w-14 md:w-16 lg:w-20' src={el.icon} alt={el.alt} />
                </article>
                )}  
            </main>
        </div>
    )
}