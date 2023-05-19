function SideBar() {
    return (
        <div className="sideBar">
            <h3>items</h3>
            <div style={{display: "inline"}}>
                <button>All</button>
                <button>Owner</button>
                <button>Dealer</button>
            </div>
            <div>
                <input type="checkbox" name="Search titles only" id="" /><p>Search titles only</p>
                <input type="checkbox" name="Has image" id="" /><p>Has image</p>
                <input type="checkbox" name="Posted today" id="" /><p>Posted today</p>
                <input type="checkbox" name="Bundle duplicates" id="" /><p>Bundle duplicates</p>
                <input type="checkbox" name="Include nearby areas" id="" /><p>Include nearby areas</p>
            </div>
        </div>
    )
}

export default SideBar