

const Fact = ({fact}) => {
  return (
    <div>
      <p>{fact}</p>
    </div>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      facts: []
    }
  }

  componentDidMount() {
    fetch('https://cat-fact.herokuapp.com/facts/random?amount=2')
    .then(response => response.json())
    .then(result => {
      this.setState({
        facts: result,
        isLoaded: true
      })
    })
  }

  render() {
    
  const {isLoaded, facts} = this.state
    
   if (!isLoaded){
     return <div>loading</div>
   } else {
     return facts.map((item, index) => <Fact fact={item.text} key={index} />)
   }
  }
}


ReactDOM.render(<App />, document.getElementById('root'))