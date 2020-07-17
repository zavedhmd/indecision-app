console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.inputOption.value;
    if(option){
        app.options.push(option)
        e.target.elements.inputOption.value = "";
        renderIndecisionApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do ?</button>
          <button onClick={removeAll}>Remove All</button>
          <p></p>
          {
            <ol>
            {
                app.options.map((option) => 
                <li key={option}>The option is {option}</li>)
            }
            </ol>
          }
          <form onSubmit={onFormSubmit}>
              <input type="text" name="inputOption"></input>
              <button>Add Option</button>
          </form>
        </div>
      );
      ReactDOM.render(template, appRoot)
};

renderIndecisionApp();