var Counter = React.createClass({
  
  getInitialState: function() {
    return {
      counter: 0,
    };
  },
  componentWillMount: function() {
    console.log('Tu sprawdzę wartość poczatkową licznika żeby się upewnić, czy mam dobre dane na wejściu');
    console.log(this.state.counter);
  },
  
  componentDidMount: function() {
    var self = this;
    console.log('Tu sprawdzę wartość liczników po renderowaniu i najechaniu myszą na pierwszy licznik - faza inicjacyjna');
    document.getElementById('counter').addEventListener("mouseover", function() {
      console.log(self.state.counter);
    });
  },
  
  componentWillUpdate: function() {
    console.log('Ten tekst się wtswietli jeśli kliknąłem w guzik (ale zanim Dom się zaktualizuje, stąd licznik "podbije" się dopiero po console.log');
    console.log(this.state.counter);
  },
  
  componentDidUpdate: function() {	
    var element1 = React.createElement('p', {}, 'Brawo - użyłeś przycisku');
    console.log('Tu sobie dorzucam napis po kliknęciu w guzik (Dom się zaktualizuje najpierw, stąd w console.log licznik już powiększony)');
    ReactDOM.render(element1, document.getElementById('info'));
    console.log(this.state.counter);
  },
  
  componentWillUnmount: function() {	  // tylko kiedy to się dzieje?
    document.getElementById('counter').removeEventListener("mouseover",function() {
      console.log('przestaje obserwować najazd myszą na przycisk');
    });
	ReactDOM.remove.document.getElementById('info');
  },
  
  increment: function() {
    this.setState({
      counter: this.state.counter + 1,
    });
  },
	
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1,
    });
  },
	
  render: function() {
    return React.createElement('div', {},
      React.createElement('p', {}, 'Licznik ' + this.state.counter),
      React.createElement('button', {onClick: this.increment}, '+'),
      React.createElement('button', {onClick: this.decrement}, '-')
	)
  }
});

var Counters = React.createClass({
  render: function() {
    return React.createElement('div', {},
	  React.createElement('div', {id: 'counter'},
      React.createElement(Counter, {})),
	  React.createElement('div', {id: 'counter1'},
      React.createElement(Counter, {})),
	  React.createElement('div', {id: 'counter2'},
      React.createElement(Counter, {})),
	  React.createElement('div', {id: 'counter3'},
	  React.createElement(Counter, {})),
	  React.createElement('div', {id: 'info'})
    )
  }
});

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));