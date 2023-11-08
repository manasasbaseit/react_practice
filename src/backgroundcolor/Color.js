import './color.css'
function Color(){
  return(
    <div className='Wraper'>
      <h1>Back ground color changer</h1>
      <input type='color' onChange={
        (e)=>{
        document.body.style.background=e.target.value
      }
      }/>
    </div>
  )
}
export default Color