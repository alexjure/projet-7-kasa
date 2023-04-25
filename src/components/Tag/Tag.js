import './Tag.css'

function Tag({content}) {
    return (
        <section>
                <div className='tags'>{content}</div>
        </section>
    ) 
}

export default Tag

/*
  const tag = logement.tags;
    const tagMap = tag.map((e, index) => (
        <p className='tagP' key={e}> {logement.tags[index]}</p>
    ));

    return <div className='tags'> {tagMap} </div>

*/