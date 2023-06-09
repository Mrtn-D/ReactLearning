function getNum() {
    return Math.floor((Math.random() * 10)) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum()
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>CONGRATS YOU WIN!</h2>
                    <img src="https://blog.teamtailor.com/hs-fs/hubfs/giphy%20(3).gif?width=500&height=245&name=giphy%20(3).gif" />
                </div>
        } else {
            msg = "BAD!"
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root3'));