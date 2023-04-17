import './Tag.css'

function Tag({ logement }) {

    const tag = logement.tags;
    const tagMap = tag.map((e, index) => (
        <p className='tagP' key={e}> {logement.tags[index]}</p>
    ));

    return <div className='tags'> {tagMap} </div>
}

export default Tag