import Link from "next/link"
import Layout from "../../../components/UI/Layout"
import Title from "../../../components/UI/Title"
import List from "../../../components/UI/List"
import Box1 from "../../../components/UI/Box1"
import SubTitle from "../../../components/UI/SubTitle"

const Season = props => {
    return (
        <Layout show={props.show}>
            <Box1>
                <Title>{props.showInfo.name}'s Unofficial Blog</Title>
                <SubTitle>Season {props.completeSeason[0].season}</SubTitle>
            </Box1>
            <List>
                <ul className="list">
                    {props.completeSeason.map(episode => (
                        <li key={episode.id}>
                            <Link href="/${props.show}/seasons/episodes/${episode.id}" as={`/${props.show}/seasons/episodes/${episode.id}`}>
                                <a>Episode {episode.number} - {episode.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </List>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { show, season } = context.query;
    const r = await await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const info = await r.json();
    const res = await fetch(`https://api.tvmaze.com/seasons/${season}/episodes`);
    const data = await res.json();

    return {
        props: {
            show: show,
            showInfo: info,
            completeSeason: data.map(entry => entry)
        }

    };
}

export default Season