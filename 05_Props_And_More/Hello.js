class Hello extends React.Component {
    render() {
        console.log(this.props);
        return <h1>Hello There!!! {this.props.to}</h1>
    }
}