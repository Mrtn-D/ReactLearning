class Slot extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props; //istend of this "{this.props.s2}", tihs is gonna create new Variables
        const winner = (s1 === s2) && (s2 === s3);
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? 'Winner!' : 'Loser!'}</p>
            </div>
        );
    }
}