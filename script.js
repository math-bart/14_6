var Counter = React.createClass({
  
  getInitialState: function() {
    return {
      counter1: 0,
      counter2: 10,
      counter3: 2,
      counter4: 0,
      counter5: 10,
      counter6: 2
    };
  },
  
  componentWillMount: function() {
    console.log('Tu sprawdzę wartość poczatkową licznika żeby się upewnić, czy mam dobre dane na wejściu');
    console.log(this.state.counter1);
  },
  
  componentDidMount: function() {
    var self = this;
    console.log('Tu sprawdzę wartość licznika po renderowaniu i najechaniu myszą - faza inicjacyjna');
    document.getElementById('counter').addEventListener("mouseover", function() {
      console.log(self.state.counter1);
    });
  },
  
  //Poniżej dwie metody, które nie bardzo wiem jak tu wykorzystać
  /*componentWillReceiveProps: function() {
    console.log('Tu przyjmę nowe propsy');
    console.log(this.state.counter1);
  },
  
  shouldComponentUpdate(nextProps, nextState) {
    
  },*/
  
  componentWillUpdate: function() {
    console.log('Ten tekst się wtswietli jeśli kliknąłem w guzik (ale zanim Dom się zaktualizuje, stąd licznik "podbije" się dopiero po console.log');
    console.log(this.state.counter1);
  },
  
  componentDidUpdate: function() {	
    var element1 = React.createElement('p', {}, 'i stała się inkrementacja');
    console.log('Tu sobie dorzucam napis po kliknęciu w górny guzik (Dom się zaktualizuje najpierw, stąd w console.log licznik już powiększony)');
    ReactDOM.render(element1, document.getElementById('counter'));
    console.log(this.state.counter1);
  },
  
  componentWillUnmount: function() {	  
    document.getElementById('counter').removeEventListener("mouseover",function() {
      console.log('przestaje obserwować najaza myszą na przycisk');
    });
  },
  
  increment: function() {
    this.setState({
      counter1: this.state.counter1 + 1,
      counter2: this.state.counter2 + 1,
      counter3: this.state.counter3 + 1
    });
  },
	
  decrement: function() {
    this.setState({
      counter4: this.state.counter4 - 1,
      counter5: this.state.counter5 - 1,
      counter6: this.state.counter6 - 1
    });
  },
	
  render: function() {
    return React.createElement('div', {},
      React.createElement('p', {}, 'Inkrementacja'),
      React.createElement('button', {onClick: this.increment},
        React.createElement('p', {}, 'Licznik ' + this.state.counter1),
        React.createElement('p', {}, 'Licznik ' + this.state.counter2),
        React.createElement('p', {}, 'Licznik ' + this.state.counter3),
		React.createElement('div', {id: 'counter'})
	  ),
      React.createElement('p', {}, 'Dekrementacja'),
      React.createElement('button', {onClick: this.decrement},
        React.createElement('p', {}, 'Licznik ' + this.state.counter4),
        React.createElement('p', {}, 'Licznik ' + this.state.counter5),
        React.createElement('p', {}, 'Licznik ' + this.state.counter6)
      )
			
    );
  }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));