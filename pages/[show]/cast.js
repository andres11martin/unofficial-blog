import Link from "next/link"
import Title from "../../components/UI/Title"
import SubTitle from "../../components/UI/SubTitle"
import Box1 from "../../components/UI/Box1"
import List from "../../components/UI/List"
import Layout from "../../components/UI/Layout"

const Cast = props => {

    return (
        <Layout show={props.show}>
            <Box1>
                <Title>{props.showInfo.name}'s Unofficial Blog</Title>
                <SubTitle>Cast</SubTitle>
            </Box1>
            <List>

                <ul className="list">

                    {props.cast.map(person => (
                        <li key={person.person.id} >
                            <Link href="/${props.show}/cast/${person.person.id}" as={`/${props.show}/cast/${person.person.id}`}>
                                <a>{person.person.name} - {person.character.name}</a>
                            </Link>
                            {person.person.image ? <img src={person.person.image.original} /> : <img src={person.character.image.original} />}
                        </li>
                    ))}
                </ul>
            </List>

        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { show } = context.query;
    const r = await await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const info = await r.json();
    const showId = info.id
    const res = await fetch(`https://api.tvmaze.com/shows/${showId}/cast`);
    const data = await res.json();

    return {
        props: {
            show: show,
            showInfo: info,
            showId: showId,
            cast: data.map(entry => entry)
        }

    };
};

export default Cast