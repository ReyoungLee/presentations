class Test extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		haha: 1,
	}
	handleClick() {
		this.setState({
			haha: this.state.haha + 1
		})
	}
	render() {
		return (
			<p onClick={this.handleClick}>
				the data haha is{this.state.haha}
			</p>
		)
	}
}
ReactDOM.render(<Test />, document.body)

