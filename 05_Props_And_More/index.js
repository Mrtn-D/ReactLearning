class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to='General Kenobi' from='Paul'/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));