import {postings} from '../postings.js'
import IndividualListing from './IndividualListing'
import Nav from './Nav'

function Listings() {
    let postList = postings.map((data, i) => <IndividualListing data={data} key={i} />)
    return (
        <div className='gallery'>
            <Nav />
            {postList}
        </div>
    )
}

export default Listings