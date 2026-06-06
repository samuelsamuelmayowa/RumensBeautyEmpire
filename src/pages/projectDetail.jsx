import { useParams } from 'react-router-dom'
import { videos } from '../data/projects';
import IdeaAd from '../components/ideaAd';

const ProjectDetail = () => {
    const { id } = useParams()
    const detail = videos[id]
    return (
        <section className='lg:p-32 md:p-10 p-4 bg-dark'>
            <div className="flex gap-10 lg:flex-row flex-col">
                <div className='text-white flex-1 flex flex-col gap-4'>
                    <h1 className='text-white font-bold text-[48px] font-cormorant'>{detail?.title}</h1>
                    <p className="text-text_gold font-quicksand font-semibold text-lg">{detail?.subTitle}</p>
                    <p className='font-quicksand font-semibold text-lg'>RELEASE DATE:{" "}
                        <span>{detail?.date}</span>
                    </p>
                    <p className='font-open_sans'>{detail?.description}</p>
                    <p className='font-open_sans'>{detail?.description2}</p>
                    <table className="border border-white w-full">
                        <thead>
                            <tr>
                                <th className="lg:p-10 p-2 border text-white font-bold text-2xl font-cormorant text-left">ARTISTS</th>
                                <th className="lg:p-10 p-2 border text-white font-bold text-2xl font-cormorant">SCRIPT BY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {detail?.eventDetails?.artists.map((artist, index)=> (
                                    <>
                                        <tr className='p-10 w-full' key={index}>
                                            <td  className='p-3 font-open_sans text-white' key={index} >{artist}</td>
                                        </tr>
                
                                    </>
                                ) )}
                                <td  className='p-3 border font-open_sans text-text_gold'>{detail?.eventDetails?.scriptedBy}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text-white font-open_sans'>{detail?.eventDetails?.caption}</p>
                </div>

                <div className='flex-1 flex flex-col gap-4'>
                    <img src={detail?.light} alt="" />
                    <h3  className='font-bold font-cormorant text-white text-2xl'>BEHIND THE SCENE</h3>
                </div>
            </div>

            <IdeaAd />
        </section>
    )
}

export default ProjectDetail