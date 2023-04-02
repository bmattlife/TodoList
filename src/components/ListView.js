import ListItem from "./ListItem";

function ListView({ list }) {
    return (
        <ul>
            {list.map(
                (item, idx) => item && <ListItem text={item} key={idx} />
            )}
        </ul>
    );
}

export default ListView;
