import './Tag.css'

function Tag({ content }) {

const tag = content.tags;
const tagMap = tag.map((e, index) => (
    <p className="tagP" key={e}>{content.tags[index]}</p>
))

    return (
        <div className='tag'>{tagMap}</div>
    )
}

export default Tag
