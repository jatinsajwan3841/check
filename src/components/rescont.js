export default function Rescont(props) {
    return (
        <div>
            Result container
            <ul>
                {props.val.length > 1
                    ? props.val.map((v) => {
                          return <li>{v}</li>;
                      })
                    : ""}
            </ul>
        </div>
    );
}
