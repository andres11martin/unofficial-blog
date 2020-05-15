import Layout from "../../../../components/UI/Layout"
import Title from "../../../../components/UI/Title"
import List from "../../../../components/UI/List"
import Box1 from "../../../../components/UI/Box1"
import SubTitle from "../../../../components/UI/SubTitle"

const Episode = props => {

    return (
        <Layout show={props.show}>
            <Box1>
                <Title>{props.showInfo.name}'s Unofficial Blog</Title>
                <SubTitle>Season {props.episode.season} - Episode {props.episode.number}</SubTitle>
                <section className="intro">
                    <div className="info">
                        <h2>{props.episode.name}</h2>

                        <div>{props.summary ? <div><p>{props.summary.replace(/<[^>]*>?/gm, '')}</p></div> : <div />}</div>

                        <p>Airdate: {props.episode.airdate}</p>
                    </div>
                    <div className="introImgEpisode">{props.episode.image ? <img src={props.episode.image.original} /> : <div />}</div>
                </section>
            </Box1>
        </Layout >
    )
}

export async function getServerSideProps(context) {
    const { show, episode } = context.query;
    const r = await await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const info = await r.json();
    const res = await fetch(`https://api.tvmaze.com/episodes/${episode}`);
    const data = await res.json();

    return {
        props: {
            show: show,
            showInfo: info,
            episode: data,
            summary: data.summary
        }

    };
}

export default Episode