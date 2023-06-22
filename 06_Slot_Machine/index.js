class App extends React.Component {
    render() {

        return (

            <div>
                <Slot />
                <Slot />
                <Slot />
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('root'));