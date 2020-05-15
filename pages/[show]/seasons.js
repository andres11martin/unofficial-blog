import Link from "next/link"
import Layout from "../../components/UI/Layout"
import Title from "../../components/UI/Title"
import List from "../../components/UI/List"
import Box1 from "../../components/UI/Box1"
import SubTitle from "../../components/UI/SubTitle"

const Seasons = props => {
    return (
        <Layout show={props.show}>
            <Box1>
                <Title>{props.showInfo.name}'s Unofficial Blog</Title>
                <SubTitle>All seasons!</SubTitle>
            </Box1>
            <List>
                <ul>
                    {props.seasons.map(season => (
                        <li key={season.id} >
                            {season.premiereDate ? <Link href="/${props.show}/seasons/${season.id}" as={`/${props.show}/seasons/${season.id}`}>
                                <a>Season {season.number} - {season.premiereDate} / {season.endDate} </a>

                            </Link>
                                :
                                <p>Season {season.number}</p>
                            }
                        </li>
                    ))}
                </ul>
            </List>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { show } = context.query
    const r = await await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const info = await r.json();
    const showId = info.id
    const seasons = await fetch(`https://api.tvmaze.com/shows/${showId}/seasons`).then(r => r.json())

    return {
        props: {
            show,
            showInfo: info,
            showId,
            seasons: seasons.map(entry => entry)
        }
    };
};

export default Seasons