import img1 from "../../assets/videoimage/bunny-bow.png"
import img2 from "../../assets/videoimage/bird1.jpg"
import img3 from "../../assets/videoimage/evil-frank.png"
import img4 from "../../assets/videoimage/its-a-trap.png"
import img5 from "../../assets/videoimage/poster_rodents_big.jpg"
import img6 from "../../assets/videoimage/rinkysplash.jpg"
import img7 from "../../assets/videoimage/rodents.png"
import img8 from "../../assets/videoimage/title_anouncement.jpg"
import { CardVideo, MenuFilter, SelectFilter  } from "./styleVideoMenu"
import { useState } from "react"

function VideoMenu (){ 

    const galleryVideo = [
        {title: `BIG BUCK PRATICANDO ARCO E FLECHA`,
        video_URL: 'link',
        description: 'description',
        module: 'Big Buck Bunny',
        image: img1,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `PASSARO CANTANDO NO AMANHECER`,
        video_URL: 'link',
        description: 'description',
        module: 'Bird',
        image: img2,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `RASCAL AMEAÇANDO UMA BORBOLETA`,
        video_URL: 'link',
        description: 'description',
        module: 'Rascal',
        image: img3,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `BIG BUCK FURIOSO`,
        video_URL: 'link',
        description: 'description',
        module: 'Big Buck Bunny',
        image: img4,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `RASCAL E SEUS AMIGOS`,
        video_URL: 'link',
        description: 'description',
        module: 'Rascal',
        image: img5,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `CUIDADO RABBIT!!!`,
        video_URL: 'link',
        description: 'description',
        module: 'Rabbit',
        image: img6,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `RASCAL E SEU BANDO PREPARANDO O BOTE`,
        video_URL: 'link',
        description: 'description',
        module: 'Rascal',
        image: img7,
        $videoPlayer: '$videoPlayer:',
        },
        {title: `BIG BUCK BUNNY E SUA TURMA`,
        video_URL: 'link',
        description: 'description',
        module: 'Big Buck Bunny',
        image: img8,
        $videoPlayer: '$videoPlayer:',
        },
    ]

    const [cattegorys, setCattegorys]= useState([{
        cattegory: "Todos",
        module: "",
        boolean: true,
    },
    {
        cattegory: "Big Buck Bunny",
        module: "Big Buck Bunny",
        boolean: false,  
    },
    {
        cattegory: "Rascal",
        module: "Rascal",
        boolean: false,  
    },
    {
        cattegory: "Bird",
        module: "Bird",
        boolean: false,  
    },
    {
        cattegory: "Rabbit",
        module: "Rabbit",
        boolean: false,  
    }
])

const [search, setSearch] = useState("")

const filterGalleryVideo = galleryVideo.filter((gallery) => { return gallery.module.includes(search)})

function switchCattegory(cattegory){
    if(!cattegory.boolean){
        const newCattegory = !cattegory.boolean
        
        for(let i = 0;i<cattegorys.length;i++){
            setCattegorys([...cattegorys,
            {boolean: true,} ])
        }
        setCattegorys([...cattegorys],
            {boolean: newCattegory})
            console.log(cattegorys)
    }
    // const newCattegory = !cattegory.boolean
    // alert(newCattegory)
    
}
    return (
        <>
        <div>
            <MenuFilter>
                {/* <span>{filters[0].cattegory}</span> */}
                {cattegorys.map((cattegory)=>{
                    return(
                        <SelectFilter cattegory={cattegory.boolean} onClick={()=>setSearch(cattegory.module)}>{cattegory.cattegory}</SelectFilter>
                    )
                })}
            </MenuFilter>
            {filterGalleryVideo.map((video) =>{
            return (
            <CardVideo>
                <div>

                    <img src={video.image} alt="video-gallery"/>
                </div>
                <div className="info-card">
                    <h3>{video.title}</h3>
                    <p>{video.module}</p>
                </div>
            </CardVideo>
            )})
            }

        </div>
        </>
    )
}

export default VideoMenu