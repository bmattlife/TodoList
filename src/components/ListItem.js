function ListItem({ text, idx }) {
    console.log(text);
    return <li key={idx}>{text}</li>;
}

export default ListItem;
