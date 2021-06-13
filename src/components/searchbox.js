export default function Searchbox(props) {
    return (
        <form onSubmit={props.fun} style={{ marginTop: "2rem" }}>
            <input type="text" name="text" placeholder="input name" />
            <input type="submit" value="submit" />
        </form>
    );
}
