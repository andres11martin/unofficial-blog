import Link from "next/link"
import Layout from "../../components/UI/Layout"
import Title from "../../components/UI/Title"
import SubTitle from "../../components/UI/SubTitle"
import Box1 from "../../components/UI/Box1"
import List from "../../components/UI/List"

const Crew = props => {
    return (
        <Layout show={props.show}>
            <Box1>
                <Title>{props.showInfo.name}'s Unofficial Blog</Title>
                <SubTitle>Crew</SubTitle>
            </Box1>
            <List>
                {props.crew.length > 0 ? <ul>
                    {props.crew.map(person => (
                        <li key={person.person.id} >
                            <Link href="/${props.show}/crew/${person.person.id}" as={`/${props.show}/crew/${person.person.id}`}>
                                <a>{person.type} - {person.person.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul> : <p className="noInfo">OMG! We don't seem to have this information... This is really embarrassing.</p>}
            </List>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { show } = context.query;
    const r = await await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const info = await r.json();
    const showId = info.id
    const res = await fetch(`https://api.tvmaze.com/shows/${showId}/crew`);
    const data = await res.json();

    return {
        props: {
            show,
            showInfo: info,
            showId,
            crew: data.map(entry => entry)
        }

    };
};

export default Crew