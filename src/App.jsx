
import './App.scss'


function App() {

  function handleClick() {
    console.log('Hello')
  }

  const handleClickWithMsg = (msg) => {
    console.log(msg)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Hello my firstname is  ${e.target.fname.value}`)
    console.log(`Hello my lastname is  ${e.target.lname.value}`)
  }
  const handleScroll = (e) =>{
    console.log(e)
    console.log(e.target.scrollTop)
    console.log(e.target.scrollLeft)
  }
  return (
    <>
      <h1>Handle Events</h1>
      <h3>onClick</h3>
      <button type="button" onClick={handleClick}>Hello</button>
      {/* Calling functions with a parameter use arrow function */}
      {/* if we are passing a function , and giving the function parameters on an evnt, use the arrow function pointing to the function*/}
      <button type="button"
        onClick={() => handleClickWithMsg('This a message')}>
        Hello with message
      </button>


      <form onSubmit={handleSubmit}>
        <h3>onSubmit</h3>
        <label htmlFor="fname"></label>
        <input type="text" id='fname' placeholder='Enter your firstname' />
        <label htmlFor="lname"></label>
        <input type="text" id='lname' placeholder='Enter your lastame' />
        <button type="submit">Submit</button>
      </form>


      <h2>onScroll </h2>
      <div onScroll={ handleScroll}
        style={
          {
            border: '1px solid black', height: '150px',
            padding: '20px', overflow: 'scroll'
          }}>
            
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
      </div>
    </>


  )
}

export default App
