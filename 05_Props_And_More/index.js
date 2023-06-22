class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to='General Kenobi'
                    from='Paul'
                    bangs={4}
                    img='https://blog.teamtailor.com/hs-fs/hubfs/giphy%20(3).gif?width=500&height=245&name=giphy%20(3).gif'
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));