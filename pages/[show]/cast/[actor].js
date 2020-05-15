import Layout from "../../../components/UI/Layout"
import Box1 from "../../../components/UI/Box1"
import Title from "../../../components/UI/Title"
import ShowsList from "../../../components/UI/ShowsList"
import Link from "next/link"

const Actor = props => {
    return (
        <Layout show={props.show}>
            <Box1>
                <Title>{props.showInfo.name}'s Unofficial Blog</Title>
                <div className="personIntro">
                    <div className="personInfo">
                        <h2>{props.personData.name}</h2>
                        <div> {props.personData.birthday ? <h3>Born: {props.personData.birthday}, {props.personData.country.name}</h3> : <div />} </div>
                        <div>{props.personData.deathday ? <h3>Dead: {props.personData.deathday}</h3> : <div />}</div>
                    </div>


                    <div className="personImg">
                        {props.personData.image ? <img src={props.personData.image.original} /> : <h1>No image</h1>}
                    </div>
                </div>

                <ShowsList>
                    <ul>
                        {props.actorData.map(show => (
                            <li key={show._embedded.show.id}>
                                <div className="showInfo">
                                    <Link href="/${show._embedded.show.name}" as={`/${show._embedded.show.name.replace(" ", "-")}`}>
                                        <a>{show._embedded.show.name} ({show._embedded.show.network ? show._embedded.show.network.name : show._embedded.show.webChannel.name})</a>
                                    </Link>

                                    <h4>{show._embedded.show.genres.join(" / ")}</h4>
                                    <p>{show._embedded.show.summary.substring(3, show._embedded.show.summary.length - 4).replace(/<[^>]*>?/gm, '')}</p>
                                </div>
                                <div className="showImg">
                                    {show._embedded.show.image ? <img src={show._embedded.show.image.original} /> : <h1>No image available.</h1>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </ShowsList>
            </Box1>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { show, actor } = context.query;
    const r = await await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const info = await r.json();
    const [personData, actorData] = await Promise.all([
        fetch(`https://api.tvmaze.com/people/${actor}`).then(r => r.json()),
        fetch(`https://api.tvmaze.com/people/${actor}/castcredits?embed=show`).then(r => r.json()),
    ])

    return {
        props: {
            show: show,
            showInfo: info,
            personData, actorData,
        }
    };
}

export default Actor